"use client";
import { redirect } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";

export default function UserButtonComponent() {
  const { user, isLoaded } = useUser();
  if (!isLoaded) {
    return <div></div>;
  }

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
