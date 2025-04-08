import React from "react";
import Header from "../components/Layout/Header/Header";
import HeroImage from "../components/Hero/HeroImage";
import Footer from "../components/Layout/Footer/Footer";

import VillaImage from "../assets/images/Turkey-Schone-Bucht-Olivers-Travels.jpg";

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <HeroImage image={VillaImage} />

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl m-auto">
          <h3 className="text-center text-2xl font-bold">
            Just over a month into my trip and I wonder how I’ve changed, if at
            all. Certainly the experiences I’ve had and things I’ve seen have
            shaped me in someway.
          </h3>

          <div className="max-w-3xl m-auto mt-10">
            <form>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  type="email"
                  placeholder="sample@yourcompany.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Interested In
                </label>
                <select
                  name="interest"
                  id="interest"
                  className="w-full p-3 border-gray-300 border-[1px] rounded-md cursor-pointer"
                >
                  <option value="asia">Asia Trip</option>
                  <option value="europe">Europe Trip</option>
                  <option value="north-america">North America Trip</option>
                  <option value="south-america">South America Trip</option>
                  <option value="australia">Australia Trip</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Number of Persons
                </label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  type="number"
                  placeholder="1"
                />
              </div>
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
