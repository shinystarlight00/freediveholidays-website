import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  return (
    <div className={`text-center animate-fadeInUp animation-delay-${delay}`}>
      <h3 className="text-xl font-bold mb-2">
        <span className="text-red-500">{icon}</span>
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
