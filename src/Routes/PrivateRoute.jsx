import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import LoadingSpinner from "../Pages/LoadingSpinner.JSX";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
