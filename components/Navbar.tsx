"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white py-2 text-black shadow-md"
          : "bg-black py-4 text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-emerald-400"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-emerald-400"
          >
            Product
          </Link>
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-emerald-400"
          >
            Contact Us
          </Link>
        </nav>

        <Button
          className={`hidden rounded-full transition-colors md:inline-flex ${
            scrolled
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : "bg-emerald-600 text-white hover:bg-emerald-700"
          }`}
        >
          Get Order Now
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute w-full bg-black p-4 text-white md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/about"
              className="p-2 text-sm font-medium transition-colors hover:text-emerald-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/product"
              className="p-2 text-sm font-medium transition-colors hover:text-emerald-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/contact"
              className="p-2 text-sm font-medium transition-colors hover:text-emerald-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button
              className="mt-2 w-full rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Order Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
