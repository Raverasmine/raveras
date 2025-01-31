import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-[#f6bd41] text-[#070808] py-16'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center space-y-12'>
          {/* Logo */}
          <div className='relative w-16 h-16'>
            <Image
              src='/globe.svg'
              alt='Logo'
              width={36}
              height={36}
              className='relative z-10 '
            />
          </div>

          {/* Navigation */}
          <nav className='flex flex-wrap justify-center gap-x-8 gap-y-4'>
            <Link
              href='/features'
              className=' hover:text-white transition-colors'
            >
              Home
            </Link>
            <Link href='/about' className=' hover:text-white transition-colors'>
              About
            </Link>

            <Link
              href='/customers'
              className=' hover:text-white transition-colors'
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
