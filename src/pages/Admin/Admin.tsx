import React from "react";
import Header from "./Layout/AdminHeader";
import Sidebar from "./Layout/AdminSidebar";

const AdminHome: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex z-0 w-full h-screen overflow-hidden">
        <Sidebar />

        <div className="bg-[#182a64] h-full w-full p-8 pt-24">
          Admin Home page
        </div>
      </div>
    </>
  );
};

export default AdminHome;
