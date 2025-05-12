"use client";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function UserButtonComponent() {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-center gap-4">
      <p className="font-medium">Welcome, {user.firstName}!</p>
      <UserButton />
    </div>
  );
}
