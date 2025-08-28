"use client";
import React from "react";
import Hero from "@/components/shared/Hero";
import CTASection from "@/components/shared/CTASection";
import { createPageUrl } from "@/lib/utils";
import { Target, Users, Shield, CheckCircle } from "lucide-react";

export default function About() {
  const heroProps = {
    headline: "Why ACME exists",
    subheadline: "Turn distributed systems into dependable products.",
    primaryCta: {
      text: "Meet the Team",
      url: createPageUrl("Team")
    }
  };

  const principles = [
    {
      icon: Target,
      title: "Clarity over cleverness",
      description: "We favor explicit contracts and documented decisions over implicit assumptions and clever abstractions."
    },
    {
      icon: CheckCircle,
      title: "Make trade-offs explicit",
      description: "Every architectural decision has trade-offs. We document them, own them, and help you understand their implications."
    },
    {
      icon: Shield,
      title: "Own the boring",
      description: "Backups, alerts, timeouts, health checks—the unglamorous work that keeps systems running reliably."
    },
    {
      icon: Users,
      title: "Security is everyone’s job",
      description: "Security isn’t a feature you add later. It’s baked into every service, every deployment, every decision."
    }
  ];

  const team = [
    {
      role: "Co-Founder & CTO",
      background: "Former Principal Engineer at major e-commerce platforms, focused on distributed systems and operational excellence."
    },
    {
      role: "Co-Founder & CEO",
      background: "Product leader with 10+ years scaling commerce platforms from startup to enterprise."
    },
    {
      role: "Head of Platform",
      background: "Infrastructure specialist with deep expertise in Kubernetes, AWS, and observability systems."
    },
    {
      role: "Lead Architect",
      background: "Full-stack engineer passionate about API design, service boundaries, and developer experience."
    }
  ];

  return (
    <div>
      <Hero {...heroProps} />

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
              Our story
            </h2>
          </div>

          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              ACME began with a conviction: retailers deserve infrastructure that scales with ambition
              and stands up to reality. We build what we wish we’d had—clear contracts, honest operations,
              and a stack you can explain on a whiteboard.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              After years of building commerce platforms at scale, we realized the same architectural
              challenges kept emerging. Services with unclear boundaries. Deployments that required
              prayer. Monitoring that told you something was wrong but not why or how to fix it.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              We founded ACME to codify the patterns that actually work in production. Not the theoretical
              perfection of conference talks, but the practical reality of systems that handle real traffic,
              real failures, and real business requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
              Our principles
            </h2>
            <p className="text-xl text-gray-300">
              The values that guide how we build products and work with customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg shrink-0">
                    <principle.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
              Built by engineers, for engineers
            </h2>
            <p className="text-xl text-gray-300">
              Our team has built commerce platforms at companies you know, handling millions of requests and billions in GMV.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-semibold">
                      {member.role.split(' ')[0][0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {member.role}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {member.background}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
                Values in action
              </h2>
              <p className="text-xl text-gray-300">
                How our principles translate to real customer outcomes.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  principle: "Clarity over cleverness",
                  action: "Every API endpoint has clear documentation, error responses include actionable guidance, and architecture diagrams are kept current with the code.",
                  outcome: "Teams onboard 3x faster and debug issues with confidence."
                },
                {
                  principle: "Make trade-offs explicit",
                  action: "We document why services are placed on specific runtimes, what performance characteristics to expect, and when to scale up or out.",
                  outcome: "Capacity planning becomes predictable and cost optimization is data-driven."
                },
                {
                  principle: "Own the boring",
                  action: "Automated backups with tested restore procedures, comprehensive alerting with runbooks, and health checks that prevent cascading failures.",
                  outcome: "Incidents are rare, and when they happen, recovery is fast and well-understood."
                }
              ].map((value, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold text-blue-400 mb-2">
                        {value.principle}
                      </h3>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">In practice:</h4>
                      <p className="text-gray-300 text-sm">
                        {value.action}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Result:</h4>
                      <p className="text-teal-400 text-sm font-medium">
                        {value.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Build with confidence"
        subtitle="Ready to build commerce infrastructure that your team can understand, trust, and extend?"
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


