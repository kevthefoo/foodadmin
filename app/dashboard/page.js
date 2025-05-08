import Image from "next/image";
import logo from "@/assets/logo.png";

import { MdKeyboardArrowDown } from "react-icons/md";

export default function Dashboard() {
    return (
        <section className="border-8 border-red-500 w-screen h-screen">
            <header className="mx-10 flex justify-center gap-2 pt-4 pb-2">
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
        </section>
    );
}
