import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import Loading from "../../utils/Loader/Loader";

import { clearErrors, login } from "../../actions/userAction";
import { RootState, AppDispatch } from "../../store";

const Login: React.FC = () => {
  const [userData, setUserData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = () => {
    dispatch(login(userData.email, userData.password));
  };

  return (
    <>
      <Header />

      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-3xl m-auto mt-10">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          {loading ? (
            <div className="flex justify-center items-center">
              <Loading />
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  type="email"
                  placeholder="sample@yourcompany.com"
                  name="email"
                  value={userData.email}
                  onChange={onHandleChange}
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={userData.password}
                  onChange={onHandleChange}
                />
              </div>
              <div className="flex gap-5">
                <button
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg"
                  onClick={onSubmit}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
                <Link to="/register">
                  <button className="bg-red-500 text-white px-6 py-2 rounded-lg">
                    Register
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
        <ToastContainer position="bottom-center" autoClose={5000} />
      </section>

      <Footer />
    </>
  );
};

export default Login;
