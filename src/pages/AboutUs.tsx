import React from "react";
import Header from "../components/Layout/Header/Header";
import HeroImage from "../components/Hero/HeroImage";
import Footer from "../components/Layout/Footer/Footer";

import VillaImage from "../assets/images/Turkey-Schone-Bucht-Olivers-Travels.jpg";

const AboutUS: React.FC = () => {
  return (
    <>
      <Header />
      <HeroImage image={VillaImage} />

      <div className="max-w-7xl mx-auto p-6 text-gray-800">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We are dedicated to providing unforgettable travel experiences. Our
            team of experts ensures that every journey is seamless, exciting,
            and full of lasting memories.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Team"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to make travel accessible, enjoyable, and
              stress-free for everyone. We curate the best destinations,
              accommodations, and activities to create the perfect travel
              experiences.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow rounded-lg text-center">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2014/02/pexels-photo-167471-500x500.jpeg"
                alt="Person"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg text-center">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2014/02/pexels-photo-167471-500x500.jpeg"
                alt="Person"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-500">Travel Consultant</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg text-center">
              <img
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2014/02/pexels-photo-167471-500x500.jpeg"
                alt="Person"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">Michael Brown1</h3>
              <p className="text-gray-500">Marketing Head</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutUS;
