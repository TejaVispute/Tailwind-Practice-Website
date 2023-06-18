import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 w-[85%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="text-xl font-bold mb-4">Company Name</h3>
            <p className="text-gray-400">1234 Street, City, Country</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@example.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white" href="#home">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white" href="#about">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white" href="#services">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a className="text-gray-400 hover:text-white" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex items-center justify-center">
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mr-4">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
