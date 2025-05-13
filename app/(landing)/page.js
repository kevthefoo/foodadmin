"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import SignInButtonComponent from "@/components/SignInButtonComponent";
import { useUser } from "@clerk/nextjs";

import logo from "@/assets/logo.png";
import background from "@/assets/background.png";

export default function Home() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (user) {
    redirect("/dashboard");
  } else {
    return (
      <section className="relative flex h-screen w-full flex-col items-center justify-center">
        <Image
          src={background}
          alt="background"
          fill
          className="absolute -z-10 object-cover object-center opacity-40"
          priority
        />
        <Image
          src={logo}
          alt="logo"
          width={150}
          height={150}
          className="mb-4 select-none"
        />
        <h1 className="text-2xl select-none">DineAR</h1>
        <p className="mb-4 select-none">
          Your best restaurant management system with AR Technology
        </p>
        <SignInButtonComponent />;
      </section>
    );
  }
}
