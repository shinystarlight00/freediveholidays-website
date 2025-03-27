import React, { useState } from "react";
import Header from "../../components/Layout/Header/Header";
import HeroImage from "../../components/Hero/HeroImage";
import Footer from "../../components/Layout/Footer/Footer";
import DestinationCard from "../../components/PopularDestinations/DestinationCard";
import { Search, ChevronDown, DollarSign } from "lucide-react";

import DestinationImage from "../../assets/images/Summer_of_Culture_hero.jpg";

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
  const [searchProp, setSearchProp] = useState({ advanced: false });

  const onAdvancedSearch = () => {
    setSearchProp((prevState) => ({
      ...prevState,
      advanced: !prevState.advanced,
    }));
  };
  return (
    <>
      <Header />
      <HeroImage image={DestinationImage} />

      <section className="py-16 px-6 bg-gray-100">
        <div className="search-bar shadow-2xl rounded-md max-w-7xl mx-auto my-5 p-4 bg-white">
          <div className="grid grid-cols-4 gap-2 w-full animate-fadeInUp animation-delay-400">
            <div className="relative rounded-md border-gray-300 border-[1px]">
              <input
                type="text"
                placeholder="Destination, city"
                className="px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
              <Search
                className="absolute right-3 top-3 text-gray-400"
                size={20}
              />
            </div>
            <div className="relative rounded-md border-gray-300 border-[1px]">
              <select className="text-gray-600 px-4 py-3 w-full rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300">
                <option>Any Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-3 text-gray-400"
                size={20}
              />
            </div>
            <div className="relative rounded-md border-gray-300 border-[1px]">
              <select className="text-gray-600 px-4 py-3 w-full rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300">
                <option>Sort By Date</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
                <option>Popularity</option>
                <option>Rating</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-3 text-gray-400"
                size={20}
              />
            </div>
            <button className="bg-red-500 text-white px-8 py-3 w-full rounded-md hover:bg-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Search
            </button>
          </div>
          <div
            className={`grid grid-cols-4 gap-2 w-full mt-5 ${
              searchProp.advanced ? "" : "hidden"
            }`}
          >
            <div className="relative rounded-md border-gray-300 border-[1px]">
              <select className="text-gray-600 px-4 py-3 w-full rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300">
                <option>All Categories</option>
                <option>Mountain</option>
                <option>Rural</option>
                <option>Snow & Ice</option>
                <option>Wildlife</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-3 text-gray-400"
                size={20}
              />
            </div>
            <div className="relative rounded-md border-gray-300 border-[1px]">
              <select className="text-gray-600 px-4 py-3 w-full rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300">
                <option>Any Destinations</option>
                <option>London</option>
                <option>Paris</option>
                <option>Venice</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-3 text-gray-400"
                size={20}
              />
            </div>
            <div className="relative rounded-md border-gray-300 border-[1px]">
              <input
                type="text"
                placeholder="Max Budget ex. 500"
                className="px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
              <DollarSign
                className="absolute right-3 top-3 text-gray-400"
                size={20}
              />
            </div>
            <div></div>
          </div>
          <div
            className="mt-3 flex text-gray-500 cursor-pointer"
            onClick={onAdvancedSearch}
          >
            <ChevronDown
              className={`${
                searchProp.advanced ? "rotate-180" : ""
              } transition-all duration-300`}
            />
            <span>Advanced Search</span>
          </div>
        </div>

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
      </section>

      <Footer />
    </>
  );
};

export default DestinationList;
