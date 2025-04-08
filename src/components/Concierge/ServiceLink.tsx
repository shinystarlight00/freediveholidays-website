import React from "react";
import { Link } from "react-router-dom";

interface DropdownMenuProps {
  images: {
    src: string;
    alt?: string;
    url?: string;
    title: string;
    desc: string[];
  }[];
}

const ServiceLink: React.FC<DropdownMenuProps> = ({ images }) => {
  return (
    <div>
      {images.map((image) => (
        <div className="relative mb-12">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-5 left-0 bg-blue-500 text-white px-4 py-3 w-[90%]">
            {image.url ? (
              <Link to={image.url}>
                <h2 className="font-bold">{image.title}</h2>
              </Link>
            ) : (
              <h2 className="font-bold">{image.title}</h2>
            )}

            {image.desc.map((description) => (
              <p className="text-[14px] mt-2">{description}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceLink;
