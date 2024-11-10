"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white h-[80px] ">
      <div className="container mx-auto flex justify-between items-center">
      
        <div className="flex items-center">
          <Image
            src="/cricket.png"
            alt="Logo"
            width={50}
            height={50}
            className="mr-4"
          />
          <h1 className="font-bold text-xl">Cricket Accessories</h1>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex ">
          <Link href="/" className="text-white  p-10 hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <Link href="/store" className="text-white p-10 hover:text-gray-300 transition duration-300">
            Our Store
          </Link>
          <Link href="/about" className="text-white p-10 hover:text-gray-300 transition duration-300">
            About Us
          </Link>
          <Link href="/contact" className="text-white p-10 hover:text-gray-300 transition duration-300">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-primary px-4 pt-4 pb-2 space-y-2">
          <Link
            href="/"
            className="block text-white py-2 px-4 hover:bg-gray-700 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/store"
            className="block text-white py-2 px-4 hover:bg-gray-700 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Store
          </Link>
          <Link
            href="/about"
            className="block text-white py-2 px-4 hover:bg-gray-700 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block text-white py-2 px-4 hover:bg-gray-700 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}

