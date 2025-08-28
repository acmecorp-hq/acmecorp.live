
import React, { useState, useEffect } from 'react';
import { TeamMember } from '@/api/entities';
import Hero from '../components/shared/Hero';
import TeamMemberCard from '../components/team/TeamMemberCard';
import CTASection from '../components/shared/CTASection';
import { Loader } from 'lucide-react';

const departmentOrder = ["Founders", "Management", "Infrastructure", "DevOps", "Backend", "Front-End"];

// Helper function to create page URLs - assuming a simple path construction
// This is a placeholder and might need to be replaced with a more robust routing solution if available
const createPageUrl = (pageName) => {
  switch (pageName) {
    case "Catalog":
      return "/catalog";
    case "Architecture":
      return "/architecture";
    default:
      return "/";
  }
};

export default function Team() {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const members = await TeamMember.list();
        const groupedByDept = members.reduce((acc, member) => {
          const dept = member.department;
          if (!acc[dept]) {
            acc[dept] = [];
          }
          acc[dept].push(member);
          return acc;
        }, {});
        setTeam(groupedByDept);
      } catch (error) {
        console.error("Failed to fetch team members:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTeam();
  }, []);

  const heroProps = {
    headline: "Meet the minds behind ACME",
    subheadline: "A passionate team of builders, operators, and architects dedicated to creating dependable commerce infrastructure."
  };

  return (
    <div>
      <Hero {...heroProps} />

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
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader className="animate-spin w-8 h-8 text-white" />
            </div>
          ) : (
            <div className="space-y-16">
              {departmentOrder.map(dept => team[dept] && (
                <div key={dept}>
                  <h2 className="font-display text-3xl text-white text-center mb-12">{dept}</h2>
                  <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-${team[dept].length > 2 ? '4' : '2'} gap-8 lg:gap-12 justify-center`}>
                    {team[dept].map(member => (
                      <TeamMemberCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
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
