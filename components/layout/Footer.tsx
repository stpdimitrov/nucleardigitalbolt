import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-dark py-16">
      <div className="max-w-[1240px] mx-auto px-6 desktop:px-6 tablet:px-6 mobile:px-5">
        {/* Footer Links Grid */}
        <div className="grid desktop:grid-cols-6 tablet:grid-cols-3 mobile:grid-cols-2 gap-8 mb-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-menu text-white font-semibold mb-2">Company</h3>
            <Link href="/about-us" className="text-body text-gray-light hover:text-white transition-colors">
              About us
            </Link>
            <Link href="/services" className="text-body text-gray-light hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-body text-gray-light hover:text-white transition-colors">
              Projects
            </Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-menu text-white font-semibold mb-2">Resources</h3>
            <Link href="/blogs" className="text-body text-gray-light hover:text-white transition-colors">
              Blogs
            </Link>
            <Link href="/contact-us" className="text-body text-gray-light hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-menu text-white font-semibold mb-2">Social</h3>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-body text-gray-light hover:text-white transition-colors">
              Twitter
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-body text-gray-light hover:text-white transition-colors">
              Instagram
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-body text-gray-light hover:text-white transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col desktop:flex-row tablet:flex-row mobile:flex-col items-center justify-between gap-4 pt-8 border-t border-gray-dark">
          <p className="text-body text-gray-mid">
            © 2024 Flixen™. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-body text-gray-mid hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-body text-gray-mid hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
