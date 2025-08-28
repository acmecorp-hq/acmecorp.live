"use client";
import React from "react";
import Link from "next/link";
import Hero from "@/components/shared/Hero";
import FeatureGrid from "@/components/shared/FeatureGrid";
import CTASection from "@/components/shared/CTASection";
import { createPageUrl } from "@/lib/utils";
import { User, Package, ShoppingCart, CreditCard, FileText, BarChart3, Shield, Globe, Zap, CheckCircle, ArrowRight } from "lucide-react";

export default function RetailHub() {
  const heroProps = {
    headline: "Retail Hub",
    subheadline: "The backbone of modern retail—cohesive storefront, unified APIs, operational truth.",
    primaryCta: {
      text: "Explore Architecture",
      url: createPageUrl("Architecture")
    }
  };

  const capabilities = [
    {
      icon: User,
      title: "Accounts",
      description: "Complete user management with registration, authentication, JWT tokens, and profile management.",
      highlights: [
        "Secure registration & login",
        "JWT token management",
        "Profile customization",
        "Password reset flows"
      ]
    },
    {
      icon: Package,
      title: "Catalog",
      description: "Comprehensive product management with categories, inventory reads, and search capabilities.",
      highlights: [
        "Product hierarchies",
        "Real-time inventory",
        "Advanced search & filtering",
        "Category management"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Cart",
      description: "Per-user shopping carts with idempotent operations and persistent state management.",
      highlights: [
        "Persistent cart state",
        "Idempotent operations",
        "Real-time updates",
        "Multi-device sync"
      ]
    },
    {
      icon: CreditCard,
      title: "Orders",
      description: "Complete order lifecycle from cart to fulfillment with inventory reservation and status tracking.",
      highlights: [
        "Inventory reservation",
        "Order status tracking",
        "Fulfillment workflows",
        "Return processing"
      ]
    },
    {
      icon: CreditCard,
      title: "Payments",
      description: "Gateway abstraction with idempotency, secure processing, and comprehensive error handling.",
      highlights: [
        "Gateway abstraction",
        "Idempotent processing",
        "Secure transactions",
        "Error handling"
      ]
    },
    {
      icon: BarChart3,
      title: "Reports",
      description: "Business intelligence with daily aggregates, CSV exports, and customizable dashboards.",
      highlights: [
        "Daily aggregates",
        "CSV export capabilities",
        "Custom dashboards",
        "Performance metrics"
      ]
    }
  ];

  const operationalFeatures = [
    {
      icon: Shield,
      title: "Security First",
      description: "TLS everywhere with HSTS on the edge, comprehensive secrets management in AWS Secrets Manager."
    },
    {
      icon: Globe,
      title: "Zero-Downtime Deploys",
      description: "Blue-green deployments with health/readiness endpoints ensuring continuous service availability."
    },
    {
      icon: Zap,
      title: "Complete Observability", 
      description: "Logs, metrics, and traces by default with OpenTelemetry integration and centralized monitoring."
    }
  ];

  return (
    <div>
      <Hero {...heroProps} />

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              Retail Hub unifies the essentials—accounts, catalog, cart, orders, payments, reporting—behind 
              a stable API and a fast storefront. Each service owns its data. Every decision is documented. 
              Rollouts are routine.
            </p>
          </div>
        </div>
      </section>

      <FeatureGrid 
        title="Core capabilities"
        subtitle="Six essential services that power modern commerce experiences"
        features={capabilities}
        columns={3}
      />

      <FeatureGrid 
        title="Operations you can trust"
        subtitle="Production-ready infrastructure with comprehensive monitoring and security"
        features={operationalFeatures}
      />

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
              Architecture that scales
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Multi-runtime approach with EKS, ECS Fargate, and EC2—each service running where it performs best.
            </p>
            <Link 
              href={createPageUrl("Architecture")}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
            >
              Explore the architecture
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "EKS",
                subtitle: "Core APIs",
                services: ["Accounts", "Catalog", "Cart", "Orders"],
                color: "blue"
              },
              {
                title: "ECS Fargate", 
                subtitle: "Stateless Web",
                services: ["Next.js Frontend", "Payments Gateway"],
                color: "teal"
              },
              {
                title: "EC2",
                subtitle: "Batch & Reports",
                services: ["Daily Aggregates", "CSV Exports"],
                color: "purple"
              }
            ].map((runtime, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  runtime.color === 'blue' ? 'bg-blue-600/20 text-blue-400' :
                  runtime.color === 'teal' ? 'bg-teal-600/20 text-teal-400' :
                  'bg-purple-600/20 text-purple-400'
                }`}>
                  {runtime.title}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {runtime.subtitle}
                </h3>
                <ul className="space-y-2">
                  {runtime.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to build with confidence?"
        subtitle="Dive deeper into our architecture or meet the team behind our products."
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


