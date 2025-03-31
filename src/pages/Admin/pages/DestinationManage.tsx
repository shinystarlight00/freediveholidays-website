import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// component
import Header from "../Layout/AdminHeader";
import Sidebar from "../Layout/AdminSidebar";
import UserDetailModal from "../../../components/Admin/UserDetailModal";

// action
import { getAllUsers } from "../../../actions/userAction";

// store
import { RootState, AppDispatch } from "../../../store";

interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  password: string;
  role: string;
}

interface UserState {
  users: User[];
}

const DestinationManagement: React.FC = () => {
  const { users } = useSelector(
    (state: RootState) => state.allUsers as UserState
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const showDetailModal = (e: React.MouseEvent<HTMLDivElement>, user: User) => {
    e.preventDefault();
    setSelectedUser(user);
  };

  return (
    <>
      <Header />
      <div className="flex z-0 w-full h-screen overflow-hidden">
        <Sidebar />

        <div className="bg-[#182a64] h-full w-full p-8 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto py-5">
            {users?.map((user, index) => (
              <div
                key={index}
                onClick={(e) => showDetailModal(e, user)}
                className={`bg-[#101e46] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fadeInUp cursor-pointer`}
              >
                <img
                  src={
                    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  }
                  alt={user.name}
                  className="w-32 h-32 my-4 mx-auto object-cover rounded-full"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-center text-gray-300">
                    {user.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedUser && (
          <UserDetailModal
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        )}
      </div>
    </>
  );
};

export default DestinationManagement;
