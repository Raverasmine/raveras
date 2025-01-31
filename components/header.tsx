"use client";

import { MenuIcon, Pickaxe } from "lucide-react";

const Header = () => {
  return (
    <header className='bg-[#070808] py-5 px-5 sticky top-0 z-10'>
      <div className='flex justify-between items-center w-full'>
        <Pickaxe className='text-white' />
        <MenuIcon className='text-white h-5 w-5 cursor-pointer md:hidden' />
        <nav className='hidden md:flex gap-6 items-center'>
          <a href='#' className='text-white hover:text-gray-300'>
            Home
          </a>
          <a href='#' className='text-white hover:text-gray-300'>
            About
          </a>
          <a href='#' className='text-white hover:text-gray-300'>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
