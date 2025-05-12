import Image from "next/image";
import logo from "@/assets/logo.png";
import NavbarComponent from "@/components/NavbarComponent";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import UserButtonComponent from "@/components/UserButtonComponent";

import { ClerkProvider } from "@clerk/nextjs";
export const metadata = {
  title: "DineAR",
  description: "Best retaurant management system",
};

export default function DashboardLayout({ children }) {
  return (
    <>
      <SignedIn>
        <section className="flex h-screen w-screen flex-col justify-start overflow-auto pb-4">
          <header className="flex justify-center gap-2 px-10 pt-4 pb-2">
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className="select-none"
            />
            <nav className="flex w-full items-center justify-between border-b-2 border-black">
              <h1 className="text-2xl select-none">DineAR</h1>
              <div className="flex items-center select-none">
                <div>
                  <UserButtonComponent />
                </div>
              </div>
            </nav>
          </header>

          <main className="flex h-full items-center justify-center pt-4">
            <NavbarComponent />
            <div className="flex h-full w-full flex-col items-start justify-start px-4">
              {children}
            </div>
          </main>
        </section>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
