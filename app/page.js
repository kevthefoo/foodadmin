"use client";

import { useState } from "react";
import { User, KeyRound } from "lucide-react";

export default function LoginForm() {
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <form className="border-4 flex flex-col justify-center items-center bg-red-700">
            <div className="text-red-500 h-10 border-2 p-8 border-red-500">
                hello
            </div>
            <h3 className="self-center">Login</h3>
            <div className="bg-red-700">
                <label htmlFor="username" className="sr-only">
                    Username
                </label>
                <input
                    id="username"
                    type="text"
                    className="w-full border-b border-white/70 bg-transparent pb-2 text-white outline-none"
                    placeholder="Username"
                />
                <label htmlFor="username" className="sr-only">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    className="w-full border-b border-white/70 bg-transparent pb-2 text-white outline-none"
                    placeholder="Password"
                />
            </div>
        </form>
    );
}
