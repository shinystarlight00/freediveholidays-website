import React from "react";
import Header from "../../components/Layout/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Layout/Footer/Footer";
import DestinationCard from "../../components/PopularDestinations/DestinationCard";

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

const DestinationList: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto py-5">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            name={destination.name}
            image={destination.image}
            delay={index * 200}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default DestinationList;
