import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updateUserDetail } from "../../actions/userAction";

import { AppDispatch } from "../../store";

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

interface UserDetailModalProps {
  user: User;
  onClose: () => void;
}

const roles = [
  { label: "Admin", name: "admin" },
  { label: "User", name: "user" },
];

const UserDetailModal: React.FC<UserDetailModalProps> = ({ user, onClose }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const dispatch = useDispatch<AppDispatch>();

  const onEdit = () => {
    setEditMode(true);
  };

  const onSave = () => {
    setEditMode(false);

    dispatch(updateUserDetail(editedUser._id, editedUser));
    onClose();
  };

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const onHandleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  User Details
                </h3>
                <div className="mt-5 space-y-3">
                  <p className="text-sm text-gray-500 grid grid-cols-2 items-center">
                    <span>Name:</span>
                    {editMode ? (
                      <input
                        className="col-span-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="name"
                        value={editedUser.name || ""}
                        onChange={onHandleChange}
                      />
                    ) : (
                      <span>{user.name}</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500 grid grid-cols-2 items-center">
                    <span>Email:</span>
                    {editMode ? (
                      <input
                        className="col-span-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="email"
                        value={editedUser.email || ""}
                        onChange={onHandleChange}
                      />
                    ) : (
                      <span>{user.email}</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500 grid grid-cols-2 items-center">
                    <span>Phone:</span>
                    {editMode ? (
                      <input
                        className="col-span-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="phone"
                        value={editedUser.phone || ""}
                        onChange={onHandleChange}
                      />
                    ) : (
                      <span>{user.phone}</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500 grid grid-cols-2 items-center">
                    <span>Address:</span>
                    {editMode ? (
                      <input
                        className="col-span-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="address"
                        value={editedUser.address || ""}
                        onChange={onHandleChange}
                      />
                    ) : (
                      <span>{user.address}</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500 grid grid-cols-2 items-center">
                    <span>PostalCode:</span>
                    {editMode ? (
                      <input
                        className="col-span-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="postalCode"
                        value={editedUser.postalCode || ""}
                        onChange={onHandleChange}
                      />
                    ) : (
                      <span>{user.postalCode}</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500 grid grid-cols-2 items-center">
                    <span>Role:</span>
                    {editMode ? (
                      <select
                        className="col-span-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="role"
                        value={editedUser.role || ""}
                        onChange={onHandleSelect}
                      >
                        {roles.map((role) => (
                          <option key={role.name} value={role.name}>
                            {role.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span>
                        {
                          roles.filter((role) => role.name == user.role)[0]
                            .label
                        }
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-end">
            {editMode ? (
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto mt-2 sm:text-sm"
                onClick={onSave}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto mt-2 sm:text-sm"
                onClick={onEdit}
              >
                Edit
              </button>
            )}

            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto mt-2 sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;
