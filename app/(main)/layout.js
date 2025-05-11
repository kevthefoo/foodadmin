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
        <section className=" w-screen h-screen flex flex-col justify-start">
            <header className="px-10 flex justify-center gap-2 pt-4 pb-2">
                <Image src={logo} alt="logo" width={50} height={50} />
                <nav className="flex justify-between items-center w-full border-b-2 border-black">
                    <h1 className="text-2xl">DineAR</h1>
                    <div className="flex items-center">
                        <p>English</p>
                        <div className="cursor-pointer">
                            <MdKeyboardArrowDown />
                        </div>
                    </div>
                </nav>
            </header>

            <main className=" h-full flex justify-center items-center pt-4 border-6 border-blue-500">
                <nav className="w-1/6 h-full border-r-2 border-black px-16 pt-4">
                    <ul className="flex flex-col justify-start items-start gap-4">
                        <li className="text-xl ">
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
                        <li className="text-xl ">
                            <Link
                                href="/profile"
                                className="flex items-center justify-center gap-2"
                            >
                                <FaCircleUser />
                                <h1>Profile</h1>
                            </Link>
                        </li>
                        <li className="text-xl ">
                            <Link
                                href="/menu"
                                className="flex items-center justify-center gap-2"
                            >
                                <FaList />
                                <h1>Menu</h1>
                            </Link>
                        </li>
                        <li className="text-xl ">
                            <Link
                                href="/settings"
                                className="flex items-center justify-center gap-2"
                            >
                                <FaWrench />

                                <h1>Settings</h1>
                            </Link>
                        </li>
                        <li className="text-xl ">
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
                <div className="w-full h-full px-4 flex flex-col justify-start items-start">
                    {children}
                </div>
            </main>
        </section>
    );
}
