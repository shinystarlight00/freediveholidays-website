import React from "react";
import { Search, ChevronDown } from "lucide-react";

const SearchForm: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 w-full max-w-4xl animate-fadeInUp animation-delay-400">
        <div className="relative">
          <input
            type="text"
            placeholder="Destination, city"
            className="px-4 py-3 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
          />
          <Search className="absolute right-3 top-3 text-gray-400" size={20} />
        </div>
        <div className="relative">
          <select className="text-gray-600 px-4 py-3 rounded-md w-64 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300">
            <option>Any Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-3 text-gray-400"
            size={20}
          />
        </div>
        <div className="relative">
          <select className="text-gray-600 px-4 py-3 rounded-md w-64 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300">
            <option>Sort By Date</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
            <option>Popularity</option>
            <option>Rating</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-3 text-gray-400"
            size={20}
          />
        </div>
        <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Search
        </button>
      </div>
      <button className="mt-4 text-white flex items-center text-sm hover:text-red-300 transition-colors duration-300 animate-fadeInUp animation-delay-600">
        <Search size={14} className="mr-1" /> Advanced Search
      </button>
    </>
  );
};

export default SearchForm;
