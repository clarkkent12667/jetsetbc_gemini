import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, badge, className = "" }: FeatureCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 h-full flex flex-col ${className}`}>
      {/* Icon */}
      <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 shrink-0">
        <div className="text-amber-600 text-2xl">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-navy-900 mb-2 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>
      
      {/* Optional Badge */}
      {badge && (
        <p className="text-sm text-amber-600 mt-3 font-medium">
          • {badge}
        </p>
      )}
    </div>
  );
}

