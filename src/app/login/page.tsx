"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export default function LoginPage() {
    const router=useRouter();

    const [user,setUser]=useState({
        email:"",
        password:""
    });
    const [loading,setLoading]=useState(false);
    const [buttonDisabled,setButtonDisabled]=useState(false);

    const onLogin=async()=>{
        try {
            setLoading(true);
            const response=await axios.post("/api/users/login",user);
            console.log(response.data);
            toast.success("Login successful");
            router.push("/profile");
        } catch (error:any) {
            console.log(error.message,"login failed");
            toast.error("Login failed");
            
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="
        text-4xl font-bold text-center 
        mb-4 text-blue-500
        ">{loading ? "Processing" : "Login"}</h1>
        <hr />
        <label htmlFor="email">E-mail</label>
        <input type="email"
        placeholder="email"
        id="email"
        value={user.email}
        onChange={(e)=>setUser({...user,email:e
        .target.value})}
        className="text-black"
        />
        <label htmlFor="password">Password</label>
        <input type="password"
        placeholder="password"
        id="password"
        value={user.password}
        onChange={(e)=>setUser({...user,password:e
        .target.value})}
        className="mb-4 text-black"
        />
        <button onClick={onLogin} className="
        bg-blue-500 text-white px-4 py-2 rounded-md
        ">Login</button>
        <Link href="/signup">
            Sign Up
        </Link>
        </div>
    );
    }