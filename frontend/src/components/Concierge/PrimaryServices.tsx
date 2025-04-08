import React from "react";
import { Link } from "react-router-dom";
import ToursActivities from "../../assets/images/Tours_and_activities_cta.jpg";
import InVillaServices from "../../assets/images/In-Villas-Service-Olivers-Travels.jpg";

const PrimaryServices: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-12">
      <div className="relative">
        <Link to="/tours-activity">
          <img
            src={ToursActivities}
            alt="Tours & Activities"
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-3 w-[90%]">
            <h2 className="font-bold">TOURS & ACTIVITIES</h2>
            <p className="text-[14px] mt-2">
              Enlist the help of an expert local guide to share their knowledge
              of the area, or partake in activites such as wine tasting and
              cooking lessons!
            </p>
          </div>
        </Link>
      </div>
      <div className="relative">
        <Link to="/in-villa">
          <img
            src={InVillaServices}
            alt="In-Villa Services"
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-3 w-[90%]">
            <h2 className="font-bold">IN-VILLA SERVICES</h2>
            <p className="text-[14px] mt-2">
              From catering to pampering, no request is too big. So if you've
              already booked a holiday with us, click here to explore our extra
              services!
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PrimaryServices;
