'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-nav bg-black/0 animate-fade-in">
        <div className="max-w-[1240px] mx-auto px-6 desktop:px-6 tablet:px-6 mobile:px-5 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <div className="relative w-[30px] h-[30px]">
                <Image
                  src="https://framerusercontent.com/images/GkYMDCuSZDdEia8bAhhQ5vE7wEM.svg"
                  alt="Flixen Logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <span className="font-ronzino text-2xl font-medium tracking-tight uppercase text-white">
                Flixen™
              </span>
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 text-menu text-white hover:opacity-80 transition-opacity cursor-pointer"
              aria-label="Toggle menu"
            >
              <span>Menu</span>
              <div className="w-5 h-5 flex flex-col items-center justify-center gap-1">
                <span className={`block w-full h-[2px] bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
                <span className={`block w-full h-[2px] bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-full h-[2px] bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} pathname={pathname} />
    </>
  );
}
