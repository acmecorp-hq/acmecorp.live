"use client";
import React from "react";
import Link from "next/link";
import Hero from "@/components/shared/Hero";
import CTASection from "@/components/shared/CTASection";
import { createPageUrl } from "@/lib/utils";
import { ArrowRight, Box } from "lucide-react";

export default function Catalog() {
  const heroProps = {
    headline: "Our Commerce Catalog",
    subheadline: "A suite of dependable, cloud-native products designed for reliability and business velocity.",
  };

  return (
    <div>
      <Hero {...heroProps} />

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
              Products
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our production-grade commerce primitives, engineered as well-bounded services with clear ownership.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="group bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/80">
              <Link href={createPageUrl("RetailHub")} className="block p-8">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="p-4 bg-blue-600/20 rounded-lg shrink-0 group-hover:bg-blue-600/30 transition-colors">
                    <Box className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      Retail Hub
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      The flagship unified commerce backbone. Includes a Next.js storefront and API-first services for accounts, catalog, cart, orders, and more.
                    </p>
                    <div className="inline-flex items-center gap-2 text-blue-400 font-medium group-hover:gap-3 transition-all">
                      <span>Explore Retail Hub</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-16">
             <p className="text-gray-400">More products coming soon...</p>
          </div>

        </div>
      </section>

      <CTASection
        title="Ready to build with confidence?"
        subtitle="Dive deeper into our architecture or meet the team behind the products."
        primaryCta={{
          text: "Explore Architecture",
          url: createPageUrl("Architecture")
        }}
        secondaryCta={{
            text: "Meet the Team",
            url: createPageUrl("Team")
        }}
      />
    </div>
  );
}


