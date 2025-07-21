import React from "react";
import { useAuthorize } from "../features/authentication/useAuthorize";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated, isAuthorized, isVerified } = useAuthorize();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-dark-0 dark:bg-dark-900 ">
        <Loading size="md" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  if (!isVerified) {
    toast.error("کاربر عزیز، پروفایل شما هنوز تایید نشده است");
    return <Navigate to="/" replace />;
  }

  if (!isAuthorized) {
    return <Navigate to="/not-access" replace />;
  }

  return children;
}

export default ProtectedRoute;
