"use client";

import Link from "next/link";
import { useState } from "react";
import { User, KeyRound } from "lucide-react";

export default function LoginForm() {
  return (
    <form className="flex flex-col items-center justify-center px-4 py-20">
      {/* <h3 className="self-center border-4">Login</h3> */}
      <div className="">
        <div className="cursor-pointer rounded-xl border-2 border-black px-4 py-2">
          <Link href="/dashboard">Enter</Link>
        </div>
        {/* <label htmlFor="username" className="sr-only">
                    Username
                </label>
                <input
                    id="username"
                    type="text"
                    className="w-full border-4 border-white bg-transparent pb-10"
                    placeholder="Username"
                /> */}
        {/* <label htmlFor="username" className="sr-only">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    className="w-full border-b border-4 border-white bg-transparent pb-2 text-white"
                    placeholder="Password"
                /> */}
      </div>
    </form>
  );
}
