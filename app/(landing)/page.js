"use client";
import { redirect } from "next/navigation";
import SignInButtonComponent from "@/components/SignInButtonComponent";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (user) {
    redirect("/dashboard");
  } else {
    return <SignInButtonComponent />;
  }
}
