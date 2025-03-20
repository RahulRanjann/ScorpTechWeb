'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              ScorpTech
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/about"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="/products"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Button variant="default" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Button className="w-full mt-4" variant="default" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}