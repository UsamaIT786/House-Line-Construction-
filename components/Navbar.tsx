"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, HardHat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <HardHat className="h-8 w-8 text-brand-accent transition-transform group-hover:scale-110" />
            <span className="font-bold text-lg md:text-xl tracking-tight text-brand-primary whitespace-nowrap">
              AHA BUILDERS <span className="text-brand-accent">& DEVELOPERS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-brand-accent hover:bg-orange-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm hover:shadow-md"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-accent p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 overflow-hidden bg-white"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-brand-accent hover:bg-gray-50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-brand-accent hover:bg-orange-600 text-white px-5 py-3 rounded-md text-base font-semibold transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
