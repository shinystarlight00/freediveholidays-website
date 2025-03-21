import React from "react";
import Header from "../../components/Layout/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Layout/Footer/Footer";
import ServiceHeader from "../../components/Concierge/ServiceHeader";
import HousekeepingImage from "../../assets/images/Housekeeping-Services-Olivers-Travels.jpg";

const CarHire: React.FC = () => {
  const service = {
    title: "Car Hire & Transfers",
    descriptions: [
      "If you really want to take advantage of your luxury villa holiday, it's worth exploring the local area - whether that's pootling down to the local boulangerie to pick up some fresh bread for breakfast or heading into the nearest city to soak up some serious culture.",
      "Hiring a car gives you the freedom to set off on your own without having to grapple with public transport - and it's super easy if you decide to grab a case of wine for the trip or pick up a few local bargains!",
      "We recommend Zest Car Rental. They search thousands of destinations to bring you the best holiday car rental, so you don't have to. They can save you time and money with their car rental comparison to find you cheap car hire worldwide and in the UK.",
      "Zest Car Rental cover an extensive range of UK and international car hire locations, so whether you are looking to find global or national car rentals, their car hire comparison tool can help.",
    ],
  };

  const images = [
    {
      src: HousekeepingImage,
      alt: "house keeping",
      title: "Book your Car Hire",
      desc: ["Get out and explore with your own set of wheels!"],
    },
    {
      src: HousekeepingImage,
      alt: "house keeping",
      title: "Book your Car Hire",
      desc: ["Get out and explore with your own set of wheels!"],
    },
    {
      src: HousekeepingImage,
      alt: "house keeping",
      title: "Book your Car Hire",
      desc: ["Get out and explore with your own set of wheels!"],
    },
  ];

  return (
    <>
      <Header />
      <Hero />

      <div className="max-w-7xl mx-auto px-4 py-12 font-sans text-gray-800">
        <ServiceHeader service={service} images={images} />
      </div>

      <Footer />
    </>
  );
};

export default CarHire;
