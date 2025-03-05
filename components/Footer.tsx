import Link from "next/link";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black pb-8 pt-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-400">
              Premium quality bicycles for all your adventures
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/mission"
                  className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                >
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/road-bikes"
                  className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                >
                  Road Bikes
                </Link>
              </li>
              <li>
                <Link
                  href="/mountain-bikes"
                  className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                >
                  Mountain Bikes
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories"
                  className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">123 Bike Street</li>
              <li className="text-sm text-gray-400">
                Email: info@roadtoroad.com
              </li>
              <li className="text-sm text-gray-400">Phone: +1 234 567 8900</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pb-4 pt-8">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div className="text-sm text-gray-400">
              Subscribe us!
              <p className="mt-1 text-xs">We will send you updates</p>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-full border-gray-700 bg-gray-900 text-white"
              />
              <Button className="rounded-full bg-emerald-600 text-white hover:bg-emerald-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 border-t border-gray-800 pt-8 md:grid-cols-2">
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} Road to Road. All rights reserved.
          </div>
          <div className="flex gap-4 md:justify-end">
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-gray-400 transition-colors hover:text-emerald-400" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-gray-400 transition-colors hover:text-emerald-400" />
            </Link>
            <Link href="#" aria-label="Youtube">
              <Youtube className="h-5 w-5 text-gray-400 transition-colors hover:text-emerald-400" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
