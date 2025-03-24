import React from "react";
import Header from "../../components/Layout/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Layout/Footer/Footer";
import ServiceHeader from "../../components/Concierge/ServiceHeader";
import ServiceLink from "../../components/Concierge/ServiceLink";
import PrivateChefImage from "../../assets/images/Holiday_catering_CTA_large_opt.jpg";

const PrivateChef: React.FC = () => {
  const service = {
    title: "Catering in your Villa",
    descriptions: [
      "At Oliver's Travels we know the importance of having some help in the kitchen when you just want to relax and enjoy the sunshine. That's why our swift concierge service can help you arrange any type of catering level you are after. From a local cook/chef who can help every day or a few times during your holiday to a one-off special meal cooked by a professional chef (see below), we can accommodate all requests.",
      "And it's not only the cooking and cleaning we can help with. We can also help organise fridge-stocking, so you have the essentials for your arrival.",
      "That's breakfast, lunch and dinner... sorted!",
      "Available on bookings in the UK, Ireland, France, Italy, Portugal and Spain*",
    ],
  };

  const images = [
    {
      src: PrivateChefImage,
      alt: "private chef image",
      url: "/",
      title: "BOOK YOUR CATERING NOW!",
      desc: [
        "Already have a booking? Complete our concierge form or give us a call on 0333 888 0205.",
        "Don't have a booking yet? Email us on concierge@oliverstravels.com",
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

export default PrivateChef;
