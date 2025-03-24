import React from "react";
import Header from "../../components/Layout/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Layout/Footer/Footer";
import ServiceHeader from "../../components/Concierge/ServiceHeader";
import ServiceLink from "../../components/Concierge/ServiceLink";
import HousekeepingImage from "../../assets/images/Housekeeping-Services-Olivers-Travels.jpg";

const ToursActivities: React.FC = () => {
  const service = {
    title: "Tours & Activities",
    descriptions: [
      "There’s nothing like getting to know the area you’re visiting quite like a tour with an expert local guide or getting stuck in with an experience typical of the region.",
      "Step into the heart of your destination with our curated collection of tours and activities led by passionate locals who love to teach you about their home and let you in on some hidden treasures.",
    ],
  };

  const images = [
    {
      src: HousekeepingImage,
      alt: "house keeping",
      url: "/",
      title: "My Event Concierge",
      desc: ["Elevate your UK stay with incredible group activities"],
    },
    {
      src: HousekeepingImage,
      alt: "house keeping",
      url: "/",
      title: "My Event Concierge",
      desc: ["Elevate your UK stay with incredible group activities"],
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

            <ul className="list-disc mt-4 ml-5 space-y-2">
              <li>
                My Event Concierge provides all you could need to accompany a
                stay in one of our UK properties, including hen and stag
                parties, mixology, dance classes and even bubble football!
              </li>
              <li>
                The 'destinology' experts at World Experience have a stellar
                array of activities in Spain and Portugal from tours and day
                trips and workshops to wine experiences.
              </li>
              <li>
                We work with experts at Ways Tours who lead guided tours in some
                of Italy’s most beautiful locations.
              </li>
              <li>
                Our partners at Towns of Italy provide fabulous guided tours in
                top regions of Italy as well as experiences such as cooking
                classes, wine tours, cycle tours and fascinating day excursions.
              </li>
              <li>
                With Viator, you can browse countless tours and experiences in
                Europe, North America, Asia, Africa and the Caribbean.
              </li>
              <li>
                How best to explore the winter playground that is Lapland? With
                Scandinavian Travel Group you can go husky-sledding, meet Santa
                Claus and chase the Northern Lights!
              </li>
            </ul>

            <p className="text-gray-700 mt-4">
              Whether navigating historic streets, savouring authentic cuisine,
              or participating in time-honoured traditions, every experience is
              an invitation to see the world through the eyes of those who call
              it home.
            </p>

            <p className="text-gray-700 mt-4 font-bold">
              If you have any questions about tours and activities, simply
              contact our friendly concierge team who will be happy to guide and
              advise how to go about your booking.
            </p>
          </div>
          <ServiceLink images={images} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ToursActivities;
