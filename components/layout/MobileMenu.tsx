'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const menuLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact-us', label: 'Contact us' },
];

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black">
      <div className="flex flex-col justify-start items-start h-full w-full desktop:w-[40%] tablet:w-full mobile:w-full p-12 desktop:p-[100px_44px] tablet:p-[100px_44px] mobile:p-[100px_20px] gap-18 overflow-y-auto">
        {/* Menu Links */}
        <div className="flex flex-col items-start gap-3.5 w-full">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`text-menu text-white hover:opacity-60 transition-opacity ${
                pathname === link.href ? 'opacity-100' : 'opacity-80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-row items-center justify-between w-full mt-auto pt-12">
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-menu text-white hover:opacity-60 transition-opacity"
          >
            Twitter
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-menu text-white hover:opacity-60 transition-opacity"
          >
            Instagram
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-menu text-white hover:opacity-60 transition-opacity"
          >
            LinkedIn
          </Link>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:opacity-60 transition-opacity"
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
