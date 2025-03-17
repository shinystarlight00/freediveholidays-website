import React from "react";
import Header from "../../components/Layout/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Layout/Footer/Footer";
import BestValueTrips from "../../components/BestValueTrips/BestValueTrips";
import DestinationInfo from "../../components/PopularDestinations/DestinationInfo";

const DestinationDetails: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />

      <BestValueTrips />

      <DestinationInfo />

      <Footer />
    </>
  );
};

export default DestinationDetails;
