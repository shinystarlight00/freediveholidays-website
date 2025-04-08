import React from "react";

interface DropdownMenuProps {
  service: { title: string; descriptions: string[] };
}

const ServiceHeader: React.FC<DropdownMenuProps> = ({ service }) => {
  return (
    <div className="relative">
      <h2 className="text-2xl">{service.title}</h2>
      {service.descriptions.map((desc) => (
        <p className="text-gray-700 mt-4">{desc}</p>
      ))}
    </div>
  );
};

export default ServiceHeader;
