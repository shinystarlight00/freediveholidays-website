import React from "react";
import Header from "../../components/Layout/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Layout/Footer/Footer";
import ServiceHeader from "../../components/Concierge/ServiceHeader";
import ServiceLink from "../../components/Concierge/ServiceLink";
import FridgeStockImage from "../../assets/images/Fridge-Stocking-Olivers-Travels.jpg";

const FridgeStock: React.FC = () => {
  const service = {
    title: "Fridge Stocking",
    descriptions: [
      "Many of our property owners would be happy to arrange for pre-arrival shopping – just send us a list of the items you’ll need for the first evening or breakfast and we’ll speak with the owner to see if they are able to provide.",
      "You can quickly embrace the culture of your destination by ordering those local pastries you've been yearning for, your favourite wine or that delectable Jamon Iberico. We'll do our very best to cater to your taste buds.",
      "Simply fill in this form with your requirements and we will take care of the rest.",
    ],
  };

  const images = [
    {
      src: FridgeStockImage,
      alt: "fridge stock image",
      url: "/",
      title: "Indulge in our lavish fridge stocking service",
      desc: [
        "Choose from local delicacies, moreish basics and tantalising vinos...",
      ],
    },
  ];

  return (
    <>
      <Header />
      <Hero />

      <div className="max-w-7xl mx-auto px-4 py-12 font-sans text-gray-800">
        <div className="grid md:grid-cols-2 gap-4 mt-12">
          <div>
            <ServiceHeader service={service} />
          </div>
          <ServiceLink images={images} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FridgeStock;
