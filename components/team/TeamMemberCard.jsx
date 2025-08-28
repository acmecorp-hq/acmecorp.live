import React from 'react';

export default function TeamMemberCard({ member }) {
  return (
    <div className="text-center">
      <div className="relative inline-block">
        <img
          src={member.image_url}
          alt={`Portrait of ${member.first_name} ${member.last_name}`}
          className="rounded-full w-32 h-32 lg:w-40 lg:h-40 object-cover mx-auto mb-4 border-4 border-slate-700/50 transition-all duration-300 hover:border-blue-500/80"
          loading="lazy"
        />
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-slate-700/50"></div>
      </div>
      <h3 className="text-lg font-semibold text-white">{`${member.first_name} ${member.last_name}`}</h3>
      <p className="text-blue-400 text-sm">{member.role}</p>
    </div>
  );
}


