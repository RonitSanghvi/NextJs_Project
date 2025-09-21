import { Button } from "../components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-sm border-b border-[#ea5c95]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-[#ea5c95]">
              श्री जैन मंदिर
            </h1>
          </div>
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
            <Link href="/" className="text-[#2d1b2e] hover:text-[#ea5c95] transition-colors">
              Events
            </Link>
            <Link href="/" className="text-[#2d1b2e] hover:text-[#ea5c95] transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-[#5abab6] hover:bg-[#5abab6]/90 text-white">
            Donate
          </Button>
        </div>
      </div>
    </header>
  );
}