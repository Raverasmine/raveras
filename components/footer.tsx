import Link from "next/link";
import Image from "next/image";
import { jetbrainsMono } from "@/app/fonts";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-[#f6bd41] text-[#070808] py-16'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center space-y-12'>
          {/* Logo */}
          <Link
            href='/'
            className={`${jetbrainsMono.className} text-2xl font-bold text-black transition-all duration-300 hover:scale-105`}
          >
            Raveras
          </Link>

          {/* Navigation */}
          <nav className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
            <Link href='/' className=' hover:opacity-60 transition-colors'>
              Home
            </Link>
            <Link href='#about' className=' hover:opacity-60 transition-colors'>
              About
            </Link>

            <Link
              href='#projects'
              className='hover:opacity-60 transition-colors'
            >
              Our Projects
            </Link>
            <Link
              href='#sustainability'
              className='hover:opacity-60 transition-colors'
            >
              Sustainability
            </Link>
            <Link href='#assets' className='hover:opacity-60 transition-colors'>
              Our Assets
            </Link>
            <Link
              href='#contact'
              className='hover:opacity-60 transition-colors'
            >
              Contact
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className='flex gap-6'>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className=' hover:text-white transition-colors'
            >
              <Twitter className='w-6 h-6' />
              <span className='sr-only'>Twitter</span>
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className=' hover:text-white transition-colors'
            >
              <Instagram className='w-6 h-6' />
              <span className='sr-only'>Instagram</span>
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className=' hover:text-white transition-colors'
            >
              <Linkedin className='w-6 h-6' />
              <span className='sr-only'>LinkedIn</span>
            </a>
          </div>

          {/* Copyright */}
          <div className=' text-sm text-center'>
            © {new Date().getFullYear()} Raveras, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
