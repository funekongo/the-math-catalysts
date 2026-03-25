'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-tmc-primary transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="The Math Catalysts Home">
            <div className="w-9 h-9 relative flex-shrink-0">
              <Image
                src="/logo.png"
                alt="The Math Catalysts Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-heading font-bold text-tmc-accent text-lg md:text-xl leading-tight">
              The Math Catalysts
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-body font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-tmc-accent bg-white/10'
                      : 'text-white/80 hover:text-tmc-accent hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://chat.whatsapp.com/K2yQrqUgro20wgi84XTnQt"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 bg-tmc-accent text-tmc-primary font-heading font-bold text-sm rounded-full hover:bg-tmc-accent/90 hover:scale-105 transition-all duration-200 shadow-md"
            >
              Join Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-md text-sm font-body font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-tmc-accent bg-white/10'
                      : 'text-white/80 hover:text-tmc-accent hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://chat.whatsapp.com/K2yQrqUgro20wgi84XTnQt"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 mx-4 px-5 py-3 bg-tmc-accent text-tmc-primary font-heading font-bold text-sm rounded-full text-center hover:bg-tmc-accent/90 transition-colors duration-200"
            >
              Join Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
