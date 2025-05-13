"use client";

import Link from "next/link";

import { SignInButton, useUser } from "@clerk/nextjs";

export default function SignInButtonComponent() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading.....</div>;
  }

  return (
    <>
      {user ? (
        <>
          <Link
            href="/dashboard"
            className="flex cursor-pointer items-center justify-center rounded-2xl border-2 border-black px-4 py-2 text-black transition-colors duration-300 select-none hover:bg-black hover:text-white"
          >
            Enter
          </Link>
        </>
      ) : (
        <>
          <SignInButton
            mode="modal"
            className="cursor-pointer rounded-xl border-2 border-black px-4 py-2 transition-colors duration-300 hover:bg-black hover:text-white"
          />
        </>
      )}
    </>
  );
}
