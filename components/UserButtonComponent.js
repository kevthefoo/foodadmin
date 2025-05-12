"use client";
import { redirect } from "next/navigation";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function UserButtonComponent() {
  const { user } = useUser();
  if (!user) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <p className="font-medium">Welcome, {user.firstName}!</p>
      <UserButton />
    </div>
  );
}
