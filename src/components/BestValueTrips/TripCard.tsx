import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock } from "lucide-react";

interface TripCardProps {
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  delay: number;
}

const TripCard: React.FC<TripCardProps> = ({
  title,
  location,
  duration,
  price,
  image,
  delay,
}) => {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fadeInUp animation-delay-${delay}`}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <Clock size={16} className="mr-2" />
          <span>{duration}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-red-500">${price}</span>
          <Link to={`/tour/${title}`}>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
