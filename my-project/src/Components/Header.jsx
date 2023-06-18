import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto flex items-center justify-between p-4 w-[85%]">
        <div className="text-white font-bold text-xl">Your Logo</div>
        <div className="flex md:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-4 ${isMenuOpen ? "block" : "hidden"}`}>
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
