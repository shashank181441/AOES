import { Input } from "@/components/ui/input";
import { Lock, Mail } from "lucide-react";
import React from "react";

const LoginTry = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-16">
      <div className="w-[430px] h-[520px] p-6 rounded-[35px] bg-gray-100 shadow-[6px_6px_10px_rgba(0,0,0,0.1),-6px_-6px_10px_rgba(255,255,255,0.8)]">
        <div
          className="mx-auto w-[100px] h-[100px] rounded-full bg-center bg-cover bg-no-repeat shadow-[0px_0px_2px_rgba(95,95,95,1),0px_0px_0px_5px_rgba(236,240,243,1),8px_8px_15px_rgba(167,170,175,1),-8px_-8px_15px_rgba(255,255,255,1)]"
          style={{ backgroundImage: `url("gfg-logo.png")` }}
        ></div>
        <h1 className="text-center text-2xl font-bold text-green-500 pt-6 tracking-wide">
          GeeksforGeeks
        </h1>
        <p className="text-center text-sm text-green-400 pt-2 tracking-[3px]">
          Neumorphism Login Form
        </p>
        <div className="mt-4 relative">
            <Mail className="text-gray-400 font-thin absolute top-3 left-4" />
            <Input type="email" className="rounded-[12px] p-6 bg-[#e0e0e0] shadow-[inset_4px_4px_8px_#929292,inset_-4px_-4px_8px_#ffffff]"/>
        </div>
        <div className="mt-4 relative">
            <Lock className="text-gray-400 font-thin absolute top-3 left-4" />
            <Input type="password" className="rounded-[12px] p-6 bg-[#e0e0e0] shadow-[inset_4px_4px_8px_#929292,inset_-4px_-4px_8px_#ffffff]"/>
        </div>

        <button className="mt-6 w-full py-4 bg-green-500 text-white text-lg rounded-[25px] shadow-[7px_7px_8px_rgba(203,206,209,1),-7px_-7px_8px_rgba(255,255,255,1)] transition hover:bg-green-400 active:bg-green-600">
          GeeksforGeeks Signin
        </button>
        <div className="text-center mt-6 mb-6">
          <a href="#" className="text-gray-500 hover:text-green-500 transition">
            Forgot password?
          </a>{" "}
          or{" "}
          <a href="#" className="text-gray-500 hover:text-green-500 transition">
            Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginTry;
