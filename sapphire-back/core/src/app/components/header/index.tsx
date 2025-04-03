"use client";
import Link from "next/link";
import React from "react";
import Navbar from "../Navbar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import { SunIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: "Projects", href: "/pages/projects/" },
    { name: "About", href: "/pages/about/" },
  ];

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="fixed top-0 left-0 w-screen flex justify-center  items-centerc py-2 bg-white drop-shadow-md z-50">
        <div className="flex flex-row justify-between items-center my-1 w-[80%]">
          {/* Logo */}
          <span className="font-light text-center text-sm md:text-base lg:text-xl 2xl:text-2xl text-gray-800 px-4 py-2 ">
            <Link href={"/"}>BATSUURI</Link>
          </span>
          {/* Navigations */}
          <nav className="hidden sm:flex flex-row justify-between items-center gap-2 ">
            <Navbar links={navLinks}></Navbar>
            {/* Mode switch */}
            {/* <nav className="w-28 border-gray-300 border rounded-full p-1 shadow-inner flex flex-row justify-between items-center bg-gray-50">
            {/* Day 
            <div className="border rounded-full flex justify-center items-center w-8 p-1 shadow-md bg-white cursor-pointer">
              <SunIcon className="w-6 h-6"></SunIcon>
            </div>
            <span className="flex justify-end items-center mr-4">DAY</span>
          </div>
          <div className="w-28 border-gray-500 border rounded-full p-1 shadow-inner flex flex-row justify-between items-center bg-switchNight">
            <span className="flex justify-end items-center ml-2 text-white">
              NIGHT
            </span> 
            <div className="border rounded-full flex justify-center items-center w-8 p-1 shadow-md bg-white">
              <MoonIcon className="w-6 h-6"></MoonIcon>
              <SparklesIcon className="w-3 h-3 absolute top-[30px] right-[300px]"></SparklesIcon>
            </div>
          </div>*/}
          </nav>
          {/* Hamburger menu */}
          <div className="flex grow items-center justify-end sm:hidden">
            <button onClick={openMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
          {isMenuOpen && (
            <div className="absolute top-14 left-0 w-full bg-white shadow-md sm:hidden">
              <nav className="flex flex-col items-center py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="py-2 text-xl text-gray-800 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
