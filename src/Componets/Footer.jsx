import React from 'react';
import { NavLink } from 'react-router';
import { FcSmartphoneTablet } from "react-icons/fc";
import logo from "../assets/mylogo.png"
import { MdAttachEmail } from "react-icons/md";
const Footer = () => {
    return (
 <footer className="bg-[#FFBDA1] px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 rounded">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand + About */}
        <div className="sm:col-span-2">
          <NavLink
            to="/"
            aria-label="Go home"
            title="FreelanceFusion"
            className="inline-flex items-center"
          >
           <img src={logo} 
                           className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded object-contain  lg:block" />
              <h1 className="text-base lg:text-lg font-bold text-[#AD56C4]">
              FreeLance<span className="text-[#FF9CE9]">Fusion</span>
            </h1>
          </NavLink>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              FreelanceFusion helps you connect with the best talents to get your
              tasks done easily and efficiently. Join, collaborate, and grow
              together.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-base font-bold tracking-wide text-gray-900 mb-3">
            Useful Links
          </p>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#AD56C4] font-bold"
                    : "text-[#f000b8] font-semibold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#AD56C4] font-bold"
                    : "text-[#f000b8] font-semibold"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browse-task"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#AD56C4] font-bold"
                    : "text-[#f000b8] font-semibold"
                }
              >
                Browse Tasks
              </NavLink>
            </li>
           
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-base font-bold tracking-wide text-gray-900 mb-3">
            Contact Us
          </p>
          <div className="flex items-center gap-2 text-base font-medium text-[#0F0F0FB3]">
            <MdAttachEmail />
            <span>Email: support@freelancefusion.com</span>
          </div>
          <div className="flex items-center gap-2 text-base font-medium text-[#0F0F0FB3] mt-2">
            <FcSmartphoneTablet />
            <span>Phone: +880 1234-567890</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          Copyright © {new Date().getFullYear()} - All rights reserved by
          <span className="text-[#f000b8] font-semibold"> @Meem@</span>
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <NavLink
              to="/faq"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-[#f000b8]"
            >
              F.A.Q
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/privacy-policy"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-[#f000b8]"
            >
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/terms"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-[#f000b8]"
            >
              Terms & Conditions
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
    );
};

export default Footer;