import React from "react";
import { Link } from "react-router-dom";
import TravelServices from "../../assets/images/Travel-Services-Olivers-Travels.jpg";
import CateringImage from "../../assets/images/Catering-Olivers-Travels.jpg";
import FridgeStocking from "../../assets/images/Fridge-Stocking-Olivers-Travels.jpg";

const PopularServices: React.FC = () => {
  const services = [
    {
      title: "Catering",
      img: CateringImage,
      desc: "Hire a local cook to help every day or book a professional chef for a one off special meal",
      url: "/private-chef",
    },
    {
      title: "Travel Services",
      img: TravelServices,
      desc: "From car hire to transfers...",
      url: "/car-hire",
    },
    {
      title: "Fridge Stocking",
      img: FridgeStocking,
      desc: "Get everything you need for the first few days...",
      url: "/fridge-stock",
    },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold mt-12">Popular Services</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {services.map((service, index) => (
          <Link key={index} className="text-left" to={service.url}>
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-40 object-cover"
            />
            <h3 className="text-lg font-semibold mt-2 text-blue-600 underline px-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-3 px-2">{service.desc}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default PopularServices;
