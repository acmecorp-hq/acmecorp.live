"use client";
import Hero from "@/components/shared/Hero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/shared/CTASection";
import ButtonLink from "@/components/shared/ButtonLink";
import { createPageUrl } from "@/lib/utils";
import { Shield, Zap, Globe, Database, Lock, BarChart3, TrendingUp, Box } from "lucide-react";

export default function Home() {
  const heroProps = {
    headline: "Build commerce with confidence",
    subheadline: "A unified, observable backbone for retailers who value control, uptime, and velocity.",
    primaryCta: {
      text: "Explore Catalog",
      url: createPageUrl("Catalog")
    },
    trustSignals: [
      "TLS everywhere",
      "Versioned APIs", 
      "Zero-downtime rollouts",
      "Observability by default"
    ],
    backgroundPattern: true
  };

  const whyFeatures = [
    {
      icon: Shield,
      title: "Well-Bounded Services",
      description: "Clear contracts, versioned APIs, per-service data ownership, and explicit runbooks.",
      highlights: [
        "Microservices architecture",
        "API-first design",
        "Service isolation"
      ]
    },
    {
      icon: BarChart3,
      title: "Operational Truth",
      description: "TLS everywhere, logs/metrics/traces by default, zero-downtime rollouts, auditable changes.",
      highlights: [
        "Complete observability",
        "Security by design",
        "Deployment automation"
      ]
    },
    {
      icon: Globe,
      title: "Right-Fit Platform",
      description: "EKS for core APIs, ECS Fargate for stateless web, EC2 where OS control matters—documented and intentional.",
      highlights: [
        "Multi-runtime architecture",
        "Cost optimization",
        "Documented decisions"
      ]
    }
  ];

  const capabilities = [
    {
      icon: Box,
      title: "A Suite of Products for Commerce",
      description: "A comprehensive suite of composable products to power your commerce experience."
    },
    {
      icon: Database,
      title: "Unified APIs",
      description: "Accounts, Catalog, Cart, Orders, Payments, Reports—all with consistent interfaces."
    },
    {
      icon: Zap,
      title: "Right-fit Runtime",
      description: "EKS for core APIs, ECS Fargate for stateless web, EC2 when OS control matters."
    },
    {
      icon: Lock,
      title: "Operational Guardrails",
      description: "HTTPS, HSTS, secrets hygiene, health/readiness probes, comprehensive runbooks."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero {...heroProps} />

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-5">
              Built for real operations
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Commerce isn&apos;t a page and a database anymore. It&apos;s channels, promotions, subscriptions, 
              reconciliations, and audits—all changing weekly. ACME brings order to the complexity 
              with clear boundaries, documented decisions, and an architecture you can reason about.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid 
        title="What you get"
        features={capabilities}
        columns={2}
      />

      <FeatureGrid 
        title="Why teams choose ACME"
        features={whyFeatures}
      />

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-5">
              Measurable outcomes
            </h2>
            <p className="text-xl text-gray-300">
              A system your team can explain—and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                metric: "85%",
                description: "Fewer operational incidents"
              },
              {
                icon: Zap,
                metric: "3x",
                description: "Faster deployment velocity"
              },
              {
                icon: BarChart3,
                metric: "100%",
                description: "Traceable architecture decisions"
              }
            ].map((outcome, index) => (
              <div 
                key={index}
                className="text-center p-8 bg-slate-800/50 border border-slate-700 rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600/20 rounded-xl mb-6">
                  <outcome.icon className="w-8 h-8 text-teal-400" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {outcome.metric}
                </div>
                <p className="text-gray-300">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to see the flow end-to-end?"
        subtitle="Experience the complete ACME platform by exploring our product catalog."
        primaryCta={{
          text: "Explore Catalog",
          url: createPageUrl("Catalog")
        }}
        secondaryCta={{
          text: "Explore Architecture",
          url: createPageUrl("Architecture")
        }}
      />
    </div>
  );
}
