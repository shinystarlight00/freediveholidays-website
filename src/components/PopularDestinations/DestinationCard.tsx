import React from "react";

interface DestinationCardProps {
  name: string;
  image: string;
  delay: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  name,
  image,
  delay,
}) => {
  return (
    <div
      className={`relative rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 animate-fadeInUp animation-delay-${delay}`}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
        <h3 className="text-white text-xl font-bold transform transition-transform duration-300 group-hover:translate-x-2">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default DestinationCard;
