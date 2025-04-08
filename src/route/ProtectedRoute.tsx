import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store";

type ProtectedRouteProps = {
  isAdmin?: boolean;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAdmin = false }) => {
  const { loading, isAuthenticated, user } = useSelector(
    (state: RootState) => state.user
  );

  if (loading) return null;

  if (!isAuthenticated) return <Navigate to="/login" />;

  if (isAdmin && user?.role !== "admin") return <Navigate to="/login" />;

  return <Outlet />;
};

export default ProtectedRoute;
