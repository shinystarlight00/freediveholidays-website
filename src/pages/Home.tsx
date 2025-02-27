import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import PopularDestinations from "../components/PopularDestinations/PopularDestinations";
import BestValueTrips from "../components/BestValueTrips/BestValueTrips";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Articles from "../components/Articles/Articles";
import Footer from "../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
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
