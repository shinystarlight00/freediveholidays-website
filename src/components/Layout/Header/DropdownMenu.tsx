import React from "react";
import { Link } from "react-router-dom";

interface DropdownMenuProps {
  items: { name: string; url?: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
  return (
    <div className="absolute w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fadeIn">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.url ? item.url : "#"}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;
