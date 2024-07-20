import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import  User  from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody;
        console.log(reqBody);

        //if user exists
        const user =await User.findOne({email});
        if(!user){
            return NextResponse.json({ message: "User not found" }, {
                status: 400
            });
        }
        console.log(user);

        //validating pasword:
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return NextResponse.json({ error: "Invalid credentials" }, {
                status: 400
            });
        }
        console.log(user);
        //token creatin:
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true, 
            
        })
        return response;


        
    } catch (error:any) {
        return NextResponse.json({ error: error.message},{
            status: 500
        })
    }
}