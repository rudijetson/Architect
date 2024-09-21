'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Remove the following line:
  // const [_isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'unset' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      // Remove this line if it's not used elsewhere:
      // setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 bg-gradient-to-b from-gray-950 to-gray-900`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">ARCHITECT</span>
              <svg className="h-8 w-auto" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 0L50 25L25 50L0 25L25 0Z" fill="#4FD1C5" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            {['About', 'Services', 'Clients', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-base font-medium text-white hover:text-gray-200">
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA button */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/contact" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-cyan-400 hover:bg-cyan-500">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-y-0 right-0 w-full bg-gradient-to-b from-gray-950 to-gray-900 shadow-xl md:hidden transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">ARCHITECT</span>
              <svg className="h-8 w-auto" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 0L50 25L25 50L0 25L25 0Z" fill="#4FD1C5" />
              </svg>
            </Link>
          </div>
          <button
            type="button"
            className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            onClick={toggleMenu}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['About', 'Services', 'Clients', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-200 hover:bg-gray-700"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="px-2">
            <Link 
              href="/contact" 
              className="block w-full px-5 py-3 text-center font-medium text-gray-900 bg-cyan-400 hover:bg-cyan-500 rounded-md"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;