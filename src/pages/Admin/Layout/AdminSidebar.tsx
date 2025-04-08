import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar: React.FC = () => {
  return (
    <>
      <div className="h-screen w-[300px] pt-24 bg-[#101e46] text-gray-300 z-0">
        <ul className="mt-10">
          <li className="p-4 cursor-pointer transition-colors duration-100 hover:text-red-300 hover:bg-blue-900">
            <Link to="/admin/users">Users Management</Link>
          </li>
          <li className="p-4 cursor-pointer transition-colors duration-100 hover:text-red-300 hover:bg-blue-900">
            <Link to="/admin/villas">Villa Management</Link>
          </li>
          <li className="p-4 cursor-pointer transition-colors duration-100 hover:text-red-300 hover:bg-blue-900">
            <Link to="/admin/destinations">Destination Management</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
