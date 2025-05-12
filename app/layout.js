import "@/app/globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DineAR",
  description: "Best retaurant management system",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      afterSignOutUrl="/"
      // appearance={{
      //   baseTheme: neobrutalism,
      // }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} flex h-screen flex-col items-center justify-center bg-[#D6CBBE] antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
