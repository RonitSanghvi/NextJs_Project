"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-sm border-b border-[#ea5c95]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold text-[#ea5c95]">
                श्री जैन मंदिर
              </h1>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-[#2d1b2e] hover:text-[#ea5c95] transition-colors">
                Home
              </Link>
              <Link href="/pratima" className="text-[#2d1b2e] hover:text-[#ea5c95] transition-colors">
                Pratima
              </Link>
              <Link href="/gallery" className="text-[#2d1b2e] hover:text-[#ea5c95] transition-colors">
                Gallery
              </Link>
              <Link href="/events" className="text-[#2d1b2e] hover:text-[#ea5c95] transition-colors">
                Events
              </Link>
              <Link href="/contact" className="text-[#2d1b2e] hover:text-[#ea5c95] transition-colors">
                Contact
              </Link>
            </nav>

            {/* Donate Button (Desktop) */}
            <div className="hidden md:block">
              <Button className="bg-[#5abab6] hover:bg-[#5abab6]/90 text-white">
                Donate
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)}>
                <Menu className="w-6 h-6 text-[#2d1b2e]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar + Full Page Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-white via-[#fff6fa] to-[#fce3f0] shadow-2xl z-50 flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4 border-b border-gray-200">
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6 text-[#2d1b2e]" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col space-y-6 px-6 py-6 flex-grow">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-[#2d1b2e] hover:text-[#ea5c95] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/pratima"
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-[#2d1b2e] hover:text-[#ea5c95] transition-colors"
                >
                  Pratima
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-[#2d1b2e] hover:text-[#ea5c95] transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="/events"
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-[#2d1b2e] hover:text-[#ea5c95] transition-colors"
                >
                  Events
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-[#2d1b2e] hover:text-[#ea5c95] transition-colors"
                >
                  Contact
                </Link>

                {/* Donate Button (Mobile) */}
                <Button className="bg-[#5abab6] hover:bg-[#5abab6]/90 text-white">
                  Donate
                </Button>
              </nav>
            </motion.div>

            {/* Full Page Blurred Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 backdrop-blur-md bg-black/30 z-40"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}