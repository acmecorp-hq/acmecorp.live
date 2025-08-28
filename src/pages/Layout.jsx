

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ArrowRight, Mail, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home") },
  { 
    title: "Catalog", 
    isDropdown: true,
    items: [
      { title: "Retail Hub", url: createPageUrl("RetailHub") }
    ] 
  },
  { title: "Architecture", url: createPageUrl("Architecture") },
  { title: "About", url: createPageUrl("About") },
  { title: "Team", url: createPageUrl("Team") },
];

const footerLinks = {
  product: [
    { title: "Catalog", url: createPageUrl("Catalog") },
    { title: "Architecture", url: createPageUrl("Architecture") },
  ],
  company: [
    { title: "About", url: createPageUrl("About") },
    { title: "Team", url: createPageUrl("Team") },
  ],
};

export default function Layout({ children }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <style>{`
        :root {
          --color-primary: #0B3D91;
          --color-secondary: #0E7C86;
          --color-accent: #FFD166;
          --color-bg: #0F172A;
          --color-surface: #111827;
          --color-text: #FFFFFF;
          --color-muted: #9CA3AF;
          --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; 
          --space-6: 24px; --space-8: 32px;
          --radius-1: 6px; --radius-2: 12px;
          --shadow-1: 0 2px 8px rgba(0,0,0,.08);
          --shadow-2: 0 6px 20px rgba(0,0,0,.12);
          --transition-fast: 150ms ease;
          --transition-base: 250ms ease;
        }
        
        body {
          font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .font-display {
          font-family: 'Manrope', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-weight: 700;
          letter-spacing: -0.025em;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #0B3D91, #0E7C86);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glow-effect {
          box-shadow: 0 0 20px rgba(11, 61, 145, 0.3);
        }
      `}</style>

      {/* Skip to main content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-display text-xl text-white">ACME Corp</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) =>
                item.isDropdown ? (
                  <DropdownMenu key={item.title}>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-blue-400 text-gray-300 focus:outline-none">
                      {item.title}
                      <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-slate-800 border-slate-700 text-white">
                      {item.items.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.title} asChild>
                          <Link to={dropdownItem.url} className="hover:bg-slate-700">
                            {dropdownItem.title}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={item.title}
                    to={item.url}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                      location.pathname === item.url ? 'text-blue-400' : 'text-gray-300'
                    }`}
                  >
                    {item.title}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to={createPageUrl("Catalog")}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:glow-effect"
              >
                Explore Catalog
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-800 py-4">
              <div className="flex flex-col space-y-3">
                {navigationItems.map((item) =>
                  item.isDropdown ? (
                     <div key={item.title}>
                        <span className="px-3 py-2 text-sm font-medium text-gray-500">{item.title}</span>
                        <div className="flex flex-col space-y-2 pl-4 mt-2">
                        {item.items.map((dropdownItem) => (
                            <Link
                                key={dropdownItem.title}
                                to={dropdownItem.url}
                                className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                                    location.pathname === dropdownItem.url 
                                    ? 'text-blue-400 bg-slate-800' 
                                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {dropdownItem.title}
                            </Link>
                        ))}
                        </div>
                     </div>
                  ) : (
                    <Link
                        key={item.title}
                        to={item.url}
                        className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                        location.pathname === item.url 
                            ? 'text-blue-400 bg-slate-800' 
                            : 'text-gray-300 hover:text-white hover:bg-slate-800'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item.title}
                    </Link>
                  )
                )}
                <Link
                  to={createPageUrl("Catalog")}
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

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to={createPageUrl("Home")} className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="font-display text-xl text-white">ACME Corp</span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md">
                Build dependable, cloud-native commerce products that combine architectural rigor with business velocity.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.title}>
                    <Link 
                      to={link.url}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.title}>
                    <Link 
                      to={link.url}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ACME Corp. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@acmecorp.live</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

