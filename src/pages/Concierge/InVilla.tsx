import React from "react";
import Header from "../../components/Layout/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Layout/Footer/Footer";
import ServiceHeader from "../../components/Concierge/ServiceHeader";
import ServiceLink from "../../components/Concierge/ServiceLink";
import InVillaImage from "../../assets/images/champagne.jpg";

const InVilla: React.FC = () => {
  const service = {
    title: "In-Villa Services",
    descriptions: [
      "We work with some fantastic partners who can make your holiday even more special, so if you want to book a chef, spa services, boat hire, airport transfer or car hire, just ask our concierge team who can send you more information.  Many of our property owners offer additional services such as pre-arrival shopping and cleaning during your stay, so let us know if you’d like to discuss your requirements before you travel.",
    ],
  };

  const images = [
    {
      src: InVillaImage,
      alt: "in villa image",
      url: "/",
      title: "Book now!",
      desc: ["Book any of our concierge services via our easy-to-use form."],
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

export default InVilla;
