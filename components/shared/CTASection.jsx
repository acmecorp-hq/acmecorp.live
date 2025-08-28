import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection({ 
  title, 
  subtitle, 
  primaryCta, 
  secondaryCta,
  backgroundColor = "bg-gradient-to-r from-blue-900 to-slate-900" 
}) {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl lg:text-4xl text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-300 mb-8">
              {subtitle}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.url}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:glow-effect"
              >
                {primaryCta.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.url}
                className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:bg-slate-800"
              >
                {secondaryCta.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


