"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaHouseUser,
  FaCircleUser,
  FaList,
  FaWrench,
  FaHeadset,
} from "react-icons/fa6";

export default function NavbarComponent() {
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item); // Update the active item
  };

  return (
    <nav className="flex h-full w-1/6 flex-col items-start justify-between border-r-2 px-16 pt-4 select-none">
      <ul className="flex flex-col items-start justify-start gap-4">
        <li
          className="text-xl text-[#7B7260]"
          onClick={() => handleItemClick("dashboard")}
        >
          <Link
            href="/dashboard"
            className={`flex items-center justify-center gap-2 ${
              activeItem === "dashboard" ? "text-black" : ""
            }`}
          >
            <div>
              <FaHouseUser />
            </div>

            <h1>Dashboard</h1>
          </Link>
        </li>

        <li
          className="text-xl text-[#7B7260]"
          onClick={() => handleItemClick("menu")}
        >
          <Link
            href="/menu"
            className={`flex items-center justify-center gap-2 ${
              activeItem === "menu" ? "text-black" : ""
            }`}
          >
            <FaList />
            <h1>Menu</h1>
          </Link>
        </li>

        <li
          className="text-xl text-[#7B7260]"
          onClick={() => handleItemClick("profile")}
        >
          <Link
            href="/profile"
            className={`flex items-center justify-center gap-2 ${
              activeItem === "profile" ? "text-black" : ""
            }`}
          >
            <FaCircleUser />
            <h1>Profile</h1>
          </Link>
        </li>

        <li
          className="text-xl text-[#7B7260]"
          onClick={() => handleItemClick("settings")}
        >
          <Link
            href="/settings"
            className={`flex items-center justify-center gap-2 ${
              activeItem === "settings" ? "text-black" : ""
            }`}
          >
            <FaWrench />

            <h1>Settings</h1>
          </Link>
        </li>

        <li
          className="text-xl text-[#7B7260]"
          onClick={() => handleItemClick("support")}
        >
          <Link
            href="/support"
            className={`flex items-center justify-center gap-2 ${
              activeItem === "support" ? "text-black" : ""
            }`}
          >
            <FaHeadset />
            <h1>Support</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
