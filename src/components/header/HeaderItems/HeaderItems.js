"use client";

import React, { useState } from "react";
import Link from "next/link";
const HeaderItems = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5 text-[#9e0168]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        id="navbar-default"
      >
        <ul className="text-[1.2rem] font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  md:dark:text-black dark:border-gray-700">
          <li>
            <Link
              className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:border-b-[1px] border-[#9e0168] md:p-0 dark:text-white md:dark:hover:text-[#9e0168] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              href="/nos-projet"
            >
              Nos projets
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:border-b-[1px] border-[#9e0168] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              href="/notre-vision"
            >
              Notre vision
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:border-b-[1px] border-[#9e0168] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              href="/nos-actualites"
            >
              Nos actualités
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 pl-3 pr-4 text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:border-b-[1px] border-[#9e0168] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderItems;
