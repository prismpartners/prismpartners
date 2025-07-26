"use client";

import { X, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { navLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
                width={120}
                height={120}
                className="h-12 w-auto block sm:hidden"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className="font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.title}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/quote">
              <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-destructive transition-colors">
                Get Free Quote
              </button>
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
                <NavLink
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-gray-900 hover:text-primary font-medium"
                  onClick={() => setIsMenuOpen(false)} // ✅ Close menu on click
                >
                  {link.title}
                </NavLink>
              ))}
              <Link href="/quote" onClick={() => setIsMenuOpen(false)}>
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

function NavLink({
  children,
  href,
  className,
  onClick,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative transition-colors hover:text-primary",
        className,
        isActive && "text-primary font-semibold after:w-full after:bg-primary"
      )}
    >
      {children}
    </Link>
  );
}
