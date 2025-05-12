"use client";

import Link from "next/link";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function SignInButtonComponent() {
  const { user } = useUser();

  return (
    <>
      {user ? (
        <>
          <Link
            href="/dashboard"
            className="flex cursor-pointer items-center justify-center rounded-2xl border-2 border-black px-4 py-2 text-black select-none"
          >
            Enter
          </Link>
          <UserButton />
        </>
      ) : (
        <>
          <SignInButton mode="modal" />
        </>
      )}
    </>
  );
}
