import React from "react";
import { Link } from "react-router-dom";

const AdminHeader: React.FC = () => {
  return (
    <>
      <header>
        <nav className="fixed w-full top-0 py-4 px-8 bg-blue-950 text-gray-200 z-10">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-3xl text-red-300 hover:text-gray-200">
              <Link to="/admin">Admin</Link>
            </h2>
            <ul className="flex gap-5 ">
              <li className="transition-colors duration-200 hover:text-red-300">
                <Link to="/">Go to live</Link>
              </li>
              <li className="transition-colors duration-200 hover:text-red-300">
                <button>Logout</button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default AdminHeader;
