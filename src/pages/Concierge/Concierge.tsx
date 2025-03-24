import React from "react";
import Header from "../../components/Layout/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Layout/Footer/Footer";
import PrimaryServices from "../../components/Concierge/PrimaryServices";
import PopularServices from "../../components/Concierge/PopularServices";

const ConciergeIndex: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />

      <div className="max-w-7xl mx-auto px-4 py-12 font-sans text-gray-800">
        {/* Top Banner Section */}
        <PrimaryServices />

        <div className="py-[50px] my-[50px]"></div>

        {/* Popular Services Section */}
        <PopularServices />

        {/* Extra Details Section */}
        <div className="mt-12 pb-12 grid md:grid-cols-2 gap-4 border-b-2">
          <div className="relative mt-12 flex-1">
            <h2 className="text-2xl">Giving you that little extra</h2>
            <p className="text-gray-700 mt-4">
              As luxury holiday villa specialists we have all the experience in
              the world helping each and every one of our customers find the
              perfect holiday and tailoring it to the last detail.
            </p>
            <p className="text-gray-700 mt-2">
              All you need to do is provide us with the little details that
              you’re imagining for your dream holiday and we'll help make the
              necessary arrangements for you and your group.
            </p>
            <p className="text-gray-700 mt-2">
              We'll make sure that every arrangement is planned to perfection
              and each element of your holiday has been refined. Transfers,
              catering, maid service, tours and activities can all be
              prearranged to your specific requirements.
            </p>
            <p className="text-gray-700 mt-2">
              So what are you waiting for?{" "}
              <a className="underline" href="#">
                Our team is ready to help!
              </a>
            </p>
            <p className="text-gray-700 mt-2">
              Please note that fulfilling requests is subject to availability.{" "}
            </p>
          </div>
          <div className="relative mt-12 bg-blue-50 p-10">
            <h3 className="text-lg text-[#0172b1] font-semibold">
              Prefer to have a chat? Call us on:
            </h3>
            <ul className="mt-10 ml-5 text-[#0172b1] space-y-2 list-disc">
              <li>0333 888 0205 (UK)</li>
              <li>+1 (713) 332-4956 (US)</li>
              <li>+44 333 888 0205 (Intl)</li>
            </ul>
          </div>
        </div>

        {/* Review Section */}
      </div>

      <Footer />
    </>
  );
};

export default ConciergeIndex;
