import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

import { MdKeyboardArrowDown } from "react-icons/md";

import {
  FaHouseUser,
  FaCircleUser,
  FaList,
  FaWrench,
  FaHeadset,
} from "react-icons/fa6";
export default function MainLayout({ children }) {
  return (
    <section className="flex h-screen w-screen flex-col justify-start overflow-auto">
      <header className="flex justify-center gap-2 px-10 pt-4 pb-2">
        <Image src={logo} alt="logo" width={50} height={50} />
        <nav className="flex w-full items-center justify-between border-b-2 border-black">
          <h1 className="text-2xl">DineAR</h1>
          <div className="flex items-center">
            <p>English</p>
            <div className="cursor-pointer">
              <MdKeyboardArrowDown />
            </div>
          </div>
        </nav>
      </header>

      <main className="flex h-full items-center justify-center pt-4">
        <nav className="h-full w-1/6 border-r-2 border-black px-16 pt-4">
          <ul className="flex flex-col items-start justify-start gap-4">
            <li className="text-xl">
              <Link
                href="/dashboard"
                className="flex items-center justify-center gap-2"
              >
                <div>
                  <FaHouseUser />
                </div>

                <h1>Dashboard</h1>
              </Link>
            </li>
            <li className="text-xl">
              <Link
                href="/menu"
                className="flex items-center justify-center gap-2"
              >
                <FaList />
                <h1>Menu</h1>
              </Link>
            </li>
            <li className="text-xl">
              <Link
                href="/profile"
                className="flex items-center justify-center gap-2"
              >
                <FaCircleUser />
                <h1>Profile</h1>
              </Link>
            </li>

            <li className="text-xl">
              <Link
                href="/settings"
                className="flex items-center justify-center gap-2"
              >
                <FaWrench />

                <h1>Settings</h1>
              </Link>
            </li>
            <li className="text-xl">
              <Link
                href="/support"
                className="flex items-center justify-center gap-2"
              >
                <FaHeadset />
                <h1>Support</h1>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex h-full w-full flex-col items-start justify-start px-4">
          {children}
        </div>
      </main>
    </section>
  );
}
