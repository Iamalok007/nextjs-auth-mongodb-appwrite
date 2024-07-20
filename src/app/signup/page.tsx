"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
//import { set } from "mongoose";
import {toast} from "react-hot-toast";


export default function SignupPage() {
    const router = useRouter();
    const [user,setUser]=React.useState({
        email:"",
        password:"",
        username:""
    });
    const [buttonDisabled,setButtonDisabled]=React.useState(false);
    const[loading,setLoading]=React.useState(false);

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user]);

    const onSignup=async()=>{
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup",user);
            console.log(response.data,"Signup success");
            router.push("/login");

        } catch (error: any) {
            console.log(error.message,"error"); 
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="
        text-4xl font-bold text-center 
        mb-4 text-blue-500
        ">{loading?"processing":"signup"}</h1>
        <hr />
        <label htmlFor="username" className="
        mt-4 py-2 
         ">username</label>
        <input type="text"
        placeholder="username"
        id="username"
        value={user.username}
        onChange={(e)=>setUser({...user,username:e
        .target.value})}
        className="text-black"
        />
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
        <button onClick={onSignup} className="
        bg-blue-500 text-white px-4 py-2 rounded-md
        ">{buttonDisabled ? "No signup":"Signup"}</button>
        <Link href="/login">
            Log In   
        </Link>
        </div>
    );
    }