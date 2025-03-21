import React from "react";
import Header from "../../components/Layout/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Layout/Footer/Footer";
import ServiceHeader from "../../components/Concierge/ServiceHeader";
import HousekeepingImage from "../../assets/images/Housekeeping-Services-Olivers-Travels.jpg";

const HouseKeeping: React.FC = () => {
  const service = {
    title: "Housekeeping",
    descriptions: [
      "Spend more time reconnecting with your family and less time worrying about the tidying up. ",
      "Whilst most of our properties will have an end-of-stay clean included in the rental price, we know that sometimes you'll want to book in a bit of additional help during your stay.",
      "Some owners may offer a mid-week or even daily cleaning service. This will typically be listed on the property page if it is available but you can also contact our concierge team to enquire if this is an extra service you can book during your stay.",
    ],
  };

  const images = [
    {
      src: HousekeepingImage,
      alt: "house keeping",
      title: "Don't worry about the cleaning!",
      desc: ["A maid service can offer an extra hand on your holiday."],
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

export default HouseKeeping;
