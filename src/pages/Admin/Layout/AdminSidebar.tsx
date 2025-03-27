import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar: React.FC = () => {
  return (
    <>
      <div className="h-screen w-[300px] p-8 pt-24 bg-blue-900 text-gray-300 z-0">
        <ul className=" space-y-5 mt-10">
          <li className="transition-colors duration-100 hover:text-red-300">
            <Link to="/admin/users">Users Management</Link>
          </li>
          <li className="transition-colors duration-100 hover:text-red-300">
            <Link to="/admin/villas">Villa Management</Link>
          </li>
          <li className="transition-colors duration-100 hover:text-red-300">
            <Link to="/admin/destinations">Destination Management</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
