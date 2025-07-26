"use client";

import { X, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo-lg.png"
                alt="Prism Partners"
                width={273}
                height={142}
                className="h-18 w-auto hidden sm:block"
              />

              <Image
                src="/logo-sm.png"
                alt="Prism Partners"
                width={273}
                height={142}
                className="h-12 w-auto block sm:hidden"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-900 hover:text-primary transition-colors font-medium"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/quote">
              <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-destructive transition-colors hover:cursor-pointer">
                Get Free Quote
              </button>{" "}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-900 hover:text-primary transition-colors font-medium"
                >
                  {link.title}
                </Link>
              ))}

              <Link href="/quote">
                <button className="w-full mt-4 bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-destructive transition-colors">
                  Get Free Quote
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
