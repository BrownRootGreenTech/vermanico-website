'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Palette } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-primary-200 shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative h-10 w-10 group-hover:opacity-90 transition-opacity">
              <Image
                src="/static/logo.png"
                alt="VERMANICO Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-primary-900">
              VERMANICO<span className="text-sm align-top">™</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary-800 hover:text-primary-900 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-700 group-hover:w-full transition-all duration-200"></span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-primary-700 hover:bg-primary-200 transition-colors duration-200"
                aria-label="Toggle theme"
                title={`Switch to ${theme === 'blue' ? 'green' : 'blue'} theme`}
              >
                <Palette className="h-5 w-5" />
              </button>
            )}
            <Link
              href="/contact"
              className="bg-primary-700 text-white px-6 py-2 rounded-lg hover:bg-primary-800 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-primary-700 hover:bg-primary-200 transition-colors"
                aria-label="Toggle theme"
                title={`Switch to ${theme === 'blue' ? 'green' : 'blue'} theme`}
              >
                <Palette className="h-5 w-5" />
              </button>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-primary-700 hover:bg-primary-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-200">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-primary-800 hover:text-primary-900 font-medium px-4 py-2 rounded-lg hover:bg-primary-200 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition-colors font-medium text-center mx-4"
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
