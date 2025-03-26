import React from "react";
import Header from "../components/Layout/Header/Header";
import HeroImage from "../components/Hero/HeroImage";
import PopularDestinations from "../components/PopularDestinations/PopularDestinations";
import BestValueTrips from "../components/BestValueTrips/BestValueTrips";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Articles from "../components/Articles/Articles";
import Footer from "../components/Layout/Footer/Footer";

import VillaImage from "../assets/images/Turkey-Schone-Bucht-Olivers-Travels.jpg";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <HeroImage image={VillaImage} />

      <PopularDestinations />
      <BestValueTrips />
      <WhyChooseUs />
      <div
        className="h-96 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      />
      <Articles />
      <Footer />
    </>
  );
};

export default Home;
