import React from "react";
import DestinationCard from "./DestinationCard";

const PopularDestinations: React.FC = () => {
  const destinations = [
    {
      name: "Tokyo",
      image:
        "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Singapore",
      image:
        "https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Paris",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "London",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
        <p className="text-gray-600">World's best tourist destinations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={destination.name}
            name={destination.name}
            image={destination.image}
            delay={index * 200}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
