import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { createPageUrl } from "@/lib/utils";

export default function SiteFooter() {
  const productLinks = [
    { title: "Catalog", url: createPageUrl("Catalog") },
    { title: "Architecture", url: createPageUrl("Architecture") },
  ];
  const companyLinks = [
    { title: "About", url: createPageUrl("About") },
    { title: "Team", url: createPageUrl("Team") },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href={createPageUrl("Home")} className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-display text-xl text-white">ACME Corp</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Build dependable, cloud-native commerce products that combine architectural rigor with business velocity.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.title}>
                  <Link 
                    href={link.url}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.title}>
                  <Link 
                    href={link.url}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

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
  );
}


