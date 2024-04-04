"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/assets/logo.svg";
import Button from "../button/Button";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-md relative">
      <Image src={Logo} />
      <ul className="space-x-4 flex items-center">
        <li className="cursor-pointer font-medium md:block hidden">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="cursor-pointer font-medium md:block hidden">
          <Link href={"/about"}>About us</Link>
        </li>
        <li>
          <div>
            <Button />
          </div>
        </li>
        <li className="md:hidden">
          <RxHamburgerMenu onClick={toggleSidebar} />
        </li>
      </ul>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-md z-50 transition-all ${
          isSidebarOpen ? "w-64" : "w-0"
        }`}
      >
        {/* Sidebar Content */}
        <ul
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } p-4 flex flex-col justify-center items-center h-full space-y-4`}
        >
          <li className="font-semibold">
            <Link href="/">Home</Link>
          </li>
          <li className="font-semibold">
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </div>
      {/* Background Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-25 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
