import React from "react";
import SearchForm from "./SearchForm";

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">
            Where do you want to go?
          </h1>
          <p className="text-xl mb-8 animate-fadeInUp animation-delay-200">
            Find the best experiences and prices. All in one service.
          </p>
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
