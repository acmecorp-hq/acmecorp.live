"use client";
import React from "react";
import CTASection from "@/components/shared/CTASection";
import TeamMemberCard from "@/components/team/TeamMemberCard";

const departmentOrder = ["Founders", "Management", "Infrastructure", "DevOps", "Backend", "Front-End"];

const teamData = {
  Founders: [
    { id: "founder-frank-lee", first_name: "Frank", last_name: "Lee", role: "Founder", image_url: "/team/founder.frank-lee.png" },
    { id: "founder-fiona-lee", first_name: "Fiona", last_name: "Lee", role: "Founder", image_url: "/team/founder.fiona-lee.png" },
  ],
  Management: [
    { id: "pm-paul-wood", first_name: "Paul", last_name: "Wood", role: "Project Manager", image_url: "/team/project-manager.paul-wood.png" },
    { id: "ops-michael-grant", first_name: "Michael", last_name: "Grant", role: "Operations Manager", image_url: "/team/operations-manager.michael-grant.png" },
  ],
  Infrastructure: [
    { id: "infra-ian-reed", first_name: "Ian", last_name: "Reed", role: "Infrastructure (Infra)", image_url: "/team/infra.ian-reed.png" },
    { id: "infra-ivan-brooks", first_name: "Ivan", last_name: "Brooks", role: "Infrastructure (Infra)", image_url: "/team/infra.ivan-brooks.png" },
  ],
  DevOps: [
    { id: "devops-derek-chen", first_name: "Derek", last_name: "Chen", role: "DevOps", image_url: "/team/devops.derek-chen.png" },
    { id: "devops-devika-rao", first_name: "Devika", last_name: "Rao", role: "DevOps", image_url: "/team/devops.devika-rao.png" },
  ],
  Backend: [
    { id: "backend-bala-krishnan", first_name: "Bala", last_name: "Krishnan", role: "Backend", image_url: "/team/backend.bala-krishnan.png" },
    { id: "backend-bharath-kumar", first_name: "Bharath", last_name: "Kumar", role: "Backend", image_url: "/team/backend.bharath-kumar.png" },
  ],
  "Front-End": [
    { id: "frontend-freya-park", first_name: "Freya", last_name: "Park", role: "Front-End", image_url: "/team/front-end.freya-park.png" },
    { id: "frontend-freda-wang", first_name: "Freda", last_name: "Wang", role: "Front-End", image_url: "/team/front-end.freda-wang.png" },
  ],
};

export default function Team() {
  return (
    <div>
      <section className="bg-[#0B1120] py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Meet the minds behind ACME
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300/90 leading-relaxed">
              A passionate team of builders, operators, and architects dedicated to creating dependable commerce infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="font-display text-3xl lg:text-4xl text-white mb-6">
                    Our Organization
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Structured for clarity and speed, from leadership to engineering.
                </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6 lg:p-8 flex justify-center">
                 <img 
                    src="https://www.mermaidchart.com/raw/8edcd02e-c0d0-428b-9689-f34fc0691a20?theme=dark&version=v0.1&format=svg" 
                    alt="ACME Corp Team Structure"
                    className="max-w-full h-auto"
                />
            </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {departmentOrder.map((dept) => teamData[dept] && (
              <div key={dept}>
                <h2 className="font-display text-3xl text-white text-center mb-12">{dept}</h2>
                <div className={`grid grid-cols-2 md:grid-cols-2 ${teamData[dept].length > 2 ? 'lg:grid-cols-4' : 'lg:grid-cols-2'} gap-8 lg:gap-12 justify-center`}>
                  {teamData[dept].map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to build with us?"
        subtitle="Our team is ready to help you build dependable commerce infrastructure."
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

function createPageUrl(pageName) {
  if (pageName === "Catalog") return "/catalog";
  if (pageName === "Architecture") return "/architecture";
  return "/";
}


