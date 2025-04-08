import React from "react";
import Header from "../../components/Layout/Header/Header";
import HeroImage from "../../components/Hero/HeroImage";
import Footer from "../../components/Layout/Footer/Footer";
import ServiceHeader from "../../components/Concierge/ServiceHeader";
import ServiceLink from "../../components/Concierge/ServiceLink";
import HousekeepingImage from "../../assets/images/Housekeeping-Services-Olivers-Travels.jpg";

import VillaImage from "../../assets/images/Turkey-Schone-Bucht-Olivers-Travels.jpg";

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
      url: "/",
      title: "Don't worry about the cleaning!",
      desc: ["A maid service can offer an extra hand on your holiday."],
    },
  ];

  return (
    <>
      <Header />
      <HeroImage image={VillaImage} />

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

export default HouseKeeping;
