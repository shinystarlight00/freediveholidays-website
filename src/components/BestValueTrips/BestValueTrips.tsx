import React from "react";
import TripCard from "./TripCard";

const BestValueTrips: React.FC = () => {
  const trips = [
    {
      title: "French Autumn",
      location: "Paris, France",
      duration: "5 days",
      price: 1299,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Magical London",
      location: "London, UK",
      duration: "7 days",
      price: 1499,
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Tokyo Adventure",
      location: "Tokyo, Japan",
      duration: "6 days",
      price: 1699,
      image:
        "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="text-center mb-12 animate-fadeIn">
        <h2 className="text-3xl font-bold mb-2">Best Value Trips</h2>
        <p className="text-gray-600">
          Best offers with room and flight included
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {trips.map((trip, index) => (
          <TripCard key={trip.title} {...trip} delay={index * 200} />
        ))}
      </div>
    </section>
  );
};

export default BestValueTrips;
