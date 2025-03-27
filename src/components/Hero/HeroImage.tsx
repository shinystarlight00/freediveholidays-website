import React from "react";

interface HeroImageProps {
  image: string;
}

const Hero: React.FC<HeroImageProps> = ({ image }) => {
  return (
    <div className="relative">
      <div className="h-[500px]">
        <img
          className="w-full h-full absolute top-0 left-0"
          src={image}
          alt="hero image"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">
            Where do you want to go?
          </h1>
          <p className="text-xl mb-8 animate-fadeInUp animation-delay-200">
            Find the best experiences and prices. All in one service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
