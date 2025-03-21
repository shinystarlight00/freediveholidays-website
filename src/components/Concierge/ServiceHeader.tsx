import React from "react";

interface DropdownMenuProps {
  images: { src: string; alt?: string; title: string; desc: string[] }[];
  service: { title: string; descriptions: string[] };
}

const ServiceHeader: React.FC<DropdownMenuProps> = ({ service, images }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-12">
      <div className="relative">
        <h2 className="text-2xl">{service.title}</h2>
        {service.descriptions.map((desc) => (
          <p className="text-gray-700 mt-4">{desc}</p>
        ))}
      </div>
      <div>
        {images.map((image) => (
          <div className="relative mb-12">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-5 left-0 bg-blue-500 text-white px-4 py-3 w-[90%]">
              <h2 className="font-bold">{image.title}</h2>
              {image.desc.map((description) => (
                <p className="text-[14px] mt-2">{description}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceHeader;
