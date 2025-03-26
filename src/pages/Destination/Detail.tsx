import React from "react";
import Header from "../../components/Layout/Header/Header";
import HeroImage from "../../components/Hero/HeroImage";
import Footer from "../../components/Layout/Footer/Footer";
import BestValueTrips from "../../components/BestValueTrips/BestValueTrips";
import DestinationInfo from "../../components/PopularDestinations/DestinationInfo";

import DestinationImage from "../../assets/images/Summer_of_Culture_hero.jpg";

const DestinationDetails: React.FC = () => {
  return (
    <>
      <Header />
      <HeroImage image={DestinationImage} />

      <BestValueTrips />

      <DestinationInfo />

      <Footer />
    </>
  );
};

export default DestinationDetails;
