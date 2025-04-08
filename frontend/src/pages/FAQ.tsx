import React, { useState } from "react";
import Header from "../components/Layout/Header/Header";
import HeroImage from "../components/Hero/HeroImage";
import Footer from "../components/Layout/Footer/Footer";

import VillaImage from "../assets/images/Turkey-Schone-Bucht-Olivers-Travels.jpg";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer personalized travel packages, guided tours, and travel consulting to make your trips unforgettable.",
  },
  {
    question: "How can I book a tour?",
    answer:
      "You can book a tour through our website by selecting your preferred destination and filling out the booking form.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer partial or full refunds depending on the cancellation policy of your selected tour package.",
  },
  {
    question: "Can I customize my travel itinerary?",
    answer:
      "Absolutely! We provide fully customizable travel itineraries to match your preferences and schedule.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <HeroImage image={VillaImage} />

      <div className="max-w-4xl mx-auto p-6 my-10 text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow p-4 cursor-pointer bg-white"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{item.question}</h2>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Faq;
