import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import DropdownMenu from "./DropdownMenu";

const Navigation: React.FC = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const menuItems = [
    { name: "Home", items: [], url: "/" },
    { name: "Tours", items: [], url: "/tours" },
    // { name: "Booking", items: [], url: "/" },
    {
      name: "Destinations",
      items: [],
      url: "/destinations",
    },
    {
      name: "Pages",
      items: [
        { name: "About Us", url: "/about-us" },
        { name: "Contact", url: "/contact" },
        { name: "FAQ", url: "/faq" },
      ],
    },
  ];

  return (
    <nav className="bg-transparent py-4 px-6 flex justify-between items-center">
      <div className=" text-2xl font-bold transition-transform duration-300 hover:scale-110">
        GTour
      </div>
      <div className="flex space-x-4">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="relative"
            onMouseEnter={() => setHoveredMenu(item.name)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            {item.url ? (
              <Link to={item.url}>
                <button className=" flex items-center transition-colors duration-300 hover:text-red-300">
                  {item.name}
                  {item.items.length > 0 && (
                    <ChevronDown size={16} className="ml-1" />
                  )}
                </button>
                {hoveredMenu === item.name && item.items.length > 0 && (
                  <DropdownMenu items={item.items} />
                )}
              </Link>
            ) : (
              <>
                <button className=" flex items-center transition-colors duration-300 hover:text-red-300">
                  {item.name}
                  {item.items.length > 0 && (
                    <ChevronDown size={16} className="ml-1" />
                  )}
                </button>
                {hoveredMenu === item.name && item.items.length > 0 && (
                  <DropdownMenu items={item.items} />
                )}
              </>
            )}
          </div>
        ))}
        {/* <div className="bg-red-500 text-white px-2 py-1 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <span className="text-xs">2</span>
        </div> */}
      </div>
    </nav>
  );
};

export default Navigation;
