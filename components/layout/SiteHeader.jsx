"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { createPageUrl } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { title: "Home", url: createPageUrl("Home") },
    { title: "Catalog", url: createPageUrl("Catalog") },
    { title: "Architecture", url: createPageUrl("Architecture") },
    { title: "About", url: createPageUrl("About") },
    { title: "Team", url: createPageUrl("Team") },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={createPageUrl("Home")} className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-display text-xl text-white">ACME Corp</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link
              href={createPageUrl("Home")}
              className={`text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors ${pathname === '/' ? 'text-blue-400' : ''}`}
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-blue-400 text-gray-300 focus:outline-none">
                Catalog
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700 text-white">
                <DropdownMenuItem asChild>
                  <Link href={createPageUrl("RetailHub")} className="hover:bg-slate-700">
                    Retail Hub
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href={createPageUrl("Architecture")}
              className={`text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors ${pathname === '/architecture' ? 'text-blue-400' : ''}`}
            >
              Architecture
            </Link>
            <Link
              href={createPageUrl("About")}
              className={`text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors ${pathname === '/about' ? 'text-blue-400' : ''}`}
            >
              About
            </Link>
            <Link
              href={createPageUrl("Team")}
              className={`text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors ${pathname === '/team' ? 'text-blue-400' : ''}`}
            >
              Team
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href={createPageUrl("Catalog")}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:glow-effect"
            >
              Explore Catalog
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 py-4">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    pathname === item.url 
                      ? "text-blue-400 bg-slate-800" 
                      : "text-gray-300 hover:text-white hover:bg-slate-800"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href={createPageUrl("Catalog")}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore Catalog
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


