
import React from "react";
import { createPageUrl } from "@/utils";
import {
  Server,
  Database,
  Globe,
  Shield,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Cloud,
  Monitor,
  Lock
} from "lucide-react";

import Hero from "../components/shared/Hero";
import CTASection from "../components/shared/CTASection";

export default function Architecture() {
  const heroProps = {
    headline: "Architecture that explains itself",
    subheadline: "The right platform for each service, documented—EKS, ECS Fargate, and EC2.",
    primaryCta: {
      text: "Explore Catalog",
      url: createPageUrl("Catalog")
    }
  };

  const runtimes = [
    {
      title: "Amazon EKS",
      subtitle: "Core APIs",
      icon: Server,
      description: "Kubernetes-native services with horizontal pod autoscaling, pod disruption budgets, and network policies.",
      services: ["Accounts API", "Catalog API", "Cart API", "Orders API"],
      benefits: [
        "Auto-scaling based on load",
        "Rolling updates with zero downtime",
        "Network isolation",
        "Resource optimization"
      ],
      color: "blue"
    },
    {
      title: "ECS Fargate",
      subtitle: "Stateless Web",
      icon: Cloud,
      description: "Serverless containers for web applications and stateless services with automatic scaling.",
      services: ["Next.js Frontend", "Payments Gateway", "API Gateway"],
      benefits: [
        "No server management",
        "Pay-per-use pricing",
        "Fast cold starts",
        "Automatic scaling"
      ],
      color: "teal"
    },
    {
      title: "Amazon EC2",
      subtitle: "Batch & Reports",
      icon: Database,
      description: "Virtual machines for services requiring OS-level control, scheduled jobs, and batch processing.",
      services: ["Daily Reports", "Data Processing", "CSV Generation", "Backup Jobs"],
      benefits: [
        "Full OS control",
        "Custom runtime environments",
        "Persistent storage",
        "Scheduled processing"
      ],
      color: "purple"
    }
  ];

  const dataArchitecture = [
    {
      title: "PostgreSQL Cluster",
      description: "One PostgreSQL server with dedicated per-service databases for clear ownership and isolation."
    },
    {
      title: "Least Privilege Access",
      description: "Each service has access only to its own database with role-based permissions."
    },
    {
      title: "Backup & Recovery",
      description: "Automated backups with defined RPO/RTO targets and point-in-time recovery capabilities."
    },
    {
      title: "Data Encryption",
      description: "Encryption at rest and in transit with AWS KMS key management."
    }
  ];

  const observability = [
    {
      title: "OpenTelemetry Traces",
      description: "Distributed tracing across all services with correlation IDs for request tracking."
    },
    {
      title: "Centralized Logging",
      description: "Structured logs aggregated in CloudWatch with searchable fields and alerting."
    },
    {
      title: "Health Monitoring",
      description: "Health and readiness probes for every service with automated failover."
    },
    {
      title: "SLO Dashboards",
      description: "Real-time dashboards tracking service level objectives and key metrics."
    }
  ];

  return (
    <div>
      <Hero {...heroProps} />

      {/* Placement Rationale */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
              Multi-runtime approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each service runs on the platform that best serves its requirements—documented decisions, not defaults.
            </p>
          </div>

          <div className="space-y-12">
            {runtimes.map((runtime, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className={`inline-flex items-center gap-3 mb-4 ${
                      runtime.color === 'blue' ? 'text-blue-400' :
                      runtime.color === 'teal' ? 'text-teal-400' :
                      'text-purple-400'
                    }`}>
                      <div className={`p-2 rounded-lg ${
                        runtime.color === 'blue' ? 'bg-blue-600/20' :
                        runtime.color === 'teal' ? 'bg-teal-600/20' :
                        'bg-purple-600/20'
                      }`}>
                        <runtime.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {runtime.title}
                        </h3>
                        <p className="text-gray-400">
                          {runtime.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {runtime.description}
                    </p>
                  </div>

                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-white mb-4">Services</h4>
                    <ul className="space-y-2">
                      {runtime.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-white mb-4">Benefits</h4>
                    <ul className="space-y-2">
                      {runtime.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Architecture */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
              Data architecture
            </h2>
            <p className="text-xl text-gray-300">
              Clear ownership, secure access, and reliable backups with defined recovery targets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataArchitecture.map((item, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Database className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge & DNS */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
                Edge & DNS
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Route 53 hosts acmecorp.live and subdomains with ACM-issued certificates
                and public ALBs providing host-based routing.
              </p>
              <ul className="space-y-4">
                {[
                  "Route 53 DNS management",
                  "ACM SSL certificates",
                  "Application Load Balancer",
                  "Host-based routing",
                  "HTTPS everywhere",
                  "HSTS headers"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <Globe className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">
                Global Edge Network
              </h3>
              <p className="text-gray-300">
                Content delivered from the edge with automatic SSL termination and DDoS protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Observability */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
              Complete observability
            </h2>
            <p className="text-xl text-gray-300">
              OpenTelemetry traces, centralized logs, and comprehensive monitoring for operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {observability.map((item, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-600/20 rounded-lg">
                    <Monitor className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to build with confidence?"
        subtitle="Dive deeper into our products or meet the team behind them."
        primaryCta={{
          text: "Explore Catalog",
          url: createPageUrl("Catalog")
        }}
        secondaryCta={{
          text: "Meet the Team",
          url: createPageUrl("Team")
        }}
      />
    </div>
  );
}
