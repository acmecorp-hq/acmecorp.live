import React from "react";
import { ArrowRight, Play } from "lucide-react";
import ButtonLink from "@/components/shared/ButtonLink";

export default function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  trustSignals,
  backgroundPattern = false
}) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20" />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {headline}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {primaryCta && (
              <ButtonLink href={primaryCta.url}>
                {primaryCta.text}
                <ArrowRight className="w-5 h-5" />
              </ButtonLink>
            )}
            {secondaryCta && (
              <ButtonLink href={secondaryCta.url} variant="outline">
                <Play className="w-5 h-5" />
                {secondaryCta.text}
              </ButtonLink>
            )}
          </div>

          {trustSignals && (
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


