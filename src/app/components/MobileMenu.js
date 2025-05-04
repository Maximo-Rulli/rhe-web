'use client'

import Link from "next/link";
import Image from "next/image";
import English from "../../../public/svgs/english";
import Italy from "../../../public/svgs/italy";
import { useState } from "react";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-6 flex flex-col justify-center">
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mt-1.5 ${isMenuOpen ? 'hidden' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-transform ${isMenuOpen ? '-rotate-45 -mt-2' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed top-0 left-0 w-full bg-[#292929] z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="p-6 flex flex-col space-y-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-3xl focus:outline-none"
            >
              ×
            </button>
          </div>
          {/* Navigation Links */}
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                href="/es/home"
                className="text-gray-300 hover:text-white text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/positions"
                className="text-gray-300 hover:text-white text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Positions
              </Link>
            </li>
          </ul>
          {/* Language Switcher */}
          <div className="flex items-center space-x-4 pt-4 border-t border-gray-600">
            <Link
              href="/"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/imgs/spain.png"
                alt="ES"
                width={28}
                height={28}
                className="object-contain"
              />
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <English width={33} height={33} />
            </Link>
            <Link
              href="/it/home-italiano"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <Italy width={27} height={27} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}