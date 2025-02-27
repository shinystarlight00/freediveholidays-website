import React from "react";

interface DropdownMenuProps {
  items: string[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
  return (
    <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 animate-fadeIn">
      {items.map((item, index) => (
        <a
          key={index}
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default DropdownMenu;
