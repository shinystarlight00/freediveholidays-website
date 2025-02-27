import React from "react";
import FeatureCard from "./FeatureCard";
import { Globe, Zap, Phone } from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Globe size={40} />,
      title: "Handpicked Hotels",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum.",
    },
    {
      icon: <Zap size={40} />,
      title: "World Class Service",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum.",
    },
    {
      icon: <Phone size={40} />,
      title: "Best Price Guarantee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum.",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
        <p className="text-gray-600">
          Here are reasons why you should plan trip with us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} delay={index * 200} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
