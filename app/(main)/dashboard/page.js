import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export default function Dashboard() {
    return (
        <>
            <h1 className="text-2xl mb-4">Dashboard</h1>
            <div className="grid grid-cols-4 h-full w-full">
                <div className="border-2 border-black rounded-xl w-2/3 bg-stone-300 aspect-square flex flex-col justify-center items-center">
                    <p>Dishes</p>
                    <p>10</p>
                </div>
                <div className="border-2 border-black rounded-xl w-2/3 bg-stone-300 aspect-square flex flex-col justify-center items-center">
                    <p>Pending Updates</p>
                    <p>3</p>
                </div>
                <div className="border-2 border-black rounded-xl w-2/3 bg-stone-300 aspect-square flex flex-col justify-center items-center">
                    <p>Recent Activity Log</p>
                    <p>10</p>
                </div>
                <div className="cursor-pointer border-2 border-black rounded-xl w-2/3 bg-stone-300 aspect-square flex flex-col justify-center items-center">
                    <p className="text-9xl">+</p>
                </div>
            </div>
        </>
    );
}
