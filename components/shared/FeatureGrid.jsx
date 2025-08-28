import React from "react";
import { CheckCircle } from "lucide-react";

export default function FeatureGrid({ title, subtitle, features, columns = 3 }) {
  const gridCols = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4"
  };

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl text-white mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-slate-600 transition-all duration-300 hover:bg-slate-800/80"
            >
              <div className="flex items-start gap-4">
                {feature.icon && (
                  <div className="p-3 bg-blue-600/20 rounded-lg shrink-0 group-hover:bg-blue-600/30 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.highlights && (
                    <ul className="mt-4 space-y-2">
                      {feature.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-teal-500 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


