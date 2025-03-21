import React from "react";
import Header from "../../components/Layout/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Layout/Footer/Footer";
import ServiceHeader from "../../components/Concierge/ServiceHeader";
import HousekeepingImage from "../../assets/images/Housekeeping-Services-Olivers-Travels.jpg";

const ToursActivities: React.FC = () => {
  const service = {
    title: "Tours & Activities",
    descriptions: [
      "There’s nothing like getting to know the area you’re visiting quite like a tour with an expert local guide or getting stuck in with an experience typical of the region.",
      "Step into the heart of your destination with our curated collection of tours and activities led by passionate locals who love to teach you about their home and let you in on some hidden treasures.",
      "Whether navigating historic streets, savouring authentic cuisine, or participating in time-honoured traditions, every experience is an invitation to see the world through the eyes of those who call it home.",
    ],
  };

  const images = [
    {
      src: HousekeepingImage,
      alt: "house keeping",
      title: "My Event Concierge",
      desc: ["Elevate your UK stay with incredible group activities"],
    },
    {
      src: HousekeepingImage,
      alt: "house keeping",
      title: "My Event Concierge",
      desc: ["Elevate your UK stay with incredible group activities"],
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

export default ToursActivities;
