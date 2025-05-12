import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export default function Dashboard() {
  return (
    <>
      <h1 className="mb-4 text-2xl">Dashboard</h1>
      <div className="grid h-full w-full grid-cols-4">
        <div className="flex aspect-square w-2/3 flex-col items-center justify-center rounded-xl border-2 border-black bg-stone-300">
          <p>Dishes</p>
          <p>10</p>
        </div>
        <div className="flex aspect-square w-2/3 flex-col items-center justify-center rounded-xl border-2 border-black bg-stone-300">
          <p>Pending Updates</p>
          <p>3</p>
        </div>
        <div className="flex aspect-square w-2/3 flex-col items-center justify-center rounded-xl border-2 border-black bg-stone-300">
          <p>Recent Activity Log</p>
          <p>10</p>
        </div>
        <div className="flex aspect-square w-2/3 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-black bg-stone-300">
          <p className="text-9xl">+</p>
        </div>
      </div>
    </>
  );
}
