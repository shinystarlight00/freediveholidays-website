import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import DropdownMenu from "./DropdownMenu";

import { logout } from "../../../actions/userAction";

import { RootState, AppDispatch } from "../../../store";

const Navigation: React.FC = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { name: "Home", items: [], url: "/" },
    { name: "Villas", items: [], url: "/villas" },
    {
      name: "Destinations",
      items: [],
      url: "/destinations",
    },
    {
      name: "Concierge",
      items: [
        { name: "Concierge", url: "/concierge" },
        { name: "In-Villa Services", url: "/in-villa" },
        { name: "Private Chefs", url: "/private-chef" },
        { name: "Fridge Stocking", url: "/fridge-stock" },
        { name: "Housekeeping", url: "/house-keeping" },
        { name: "Car Hire & Transfers", url: "/car-hire" },
        { name: "Tours and Activities", url: "/tours-activity" },
      ],
    },
    {
      name: "Pages",
      items: [
        { name: "About Us", url: "/about-us" },
        { name: "Contact", url: "/contact" },
        { name: "FAQ", url: "/faq" },
      ],
    },
    {
      name: "Admin",
      items: [],
      url: "/admin",
    },
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-white fixed top-0 left-0 z-50 w-full">
      <div className="flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold transition-transform duration-300 hover:scale-110">
          GTour
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              {item.url ? (
                <Link to={item.url}>
                  <button className="flex items-center transition-colors duration-300 hover:text-red-300">
                    {item.name}
                    {item.items.length > 0 && (
                      <ChevronDown size={16} className="ml-1" />
                    )}
                  </button>
                </Link>
              ) : (
                <>
                  <button className="flex items-center transition-colors duration-300 hover:text-red-300">
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

          {isAuthenticated ? (
            <></>
          ) : (
            <div className="relative">
              <Link to="/login">
                <button className="flex items-center transition-colors duration-300 hover:text-red-300">
                  Login
                </button>
              </Link>
            </div>
          )}

          {isAuthenticated ? (
            <div className="relative">
              <button
                className="transition-colors duration-300 hover:text-red-300"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="relative">
              <Link to="/register">
                <button className="flex items-center transition-colors duration-300 hover:text-red-300">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>

          {isMenuOpen && (
            <div ref={mobileMenuRef}>
              <ul className="h-full w-[300px] bg-white p-4 px-10 space-y-3 fixed right-0 top-0 z-10">
                <li>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-800 focus:outline-none float-right"
                  >
                    {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
                  </button>
                </li>
                {menuItems.map((item) => (
                  <li key={item.name}>
                    {item.url ? (
                      <Link to={item.url}>
                        <button className="flex items-center transition-colors duration-300 hover:text-red-300">
                          {item.name}
                          {item.items.length > 0 && (
                            <ChevronDown size={16} className="ml-1" />
                          )}
                        </button>
                      </Link>
                    ) : (
                      <>
                        <button
                          className="flex items-center transition-colors duration-300 hover:text-red-300"
                          onClick={() => toggleDropdown(item.name)}
                        >
                          {item.name}
                          {item.items.length > 0 && (
                            <ChevronDown size={16} className="ml-1" />
                          )}
                        </button>
                        {openDropdown === item.name &&
                          item.items.length > 0 && (
                            <ul className="pl-4 space-y-3 mt-2">
                              {item.items.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    to={subItem.url}
                                    className="block text-gray-700 hover:bg-gray-100 px-4"
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                      </>
                    )}
                  </li>
                ))}
                <li className="p-3"></li>

                {isAuthenticated ? (
                  <></>
                ) : (
                  <li>
                    <Link to="/login">
                      <button className="flex items-center transition-colors duration-300 hover:text-red-300">
                        Login
                      </button>
                    </Link>
                  </li>
                )}

                {isAuthenticated ? (
                  <li>
                    <button onClick={onLogout}>Logout</button>
                  </li>
                ) : (
                  <li>
                    <Link to="/register">
                      <button className="flex items-center transition-colors duration-300 hover:text-red-300">
                        Register
                      </button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
