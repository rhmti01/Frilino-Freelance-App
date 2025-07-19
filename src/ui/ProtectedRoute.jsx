import React, { useEffect } from "react";
import { useAuthorize } from "../features/authentication/useAuthorize";
import { replace, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated, isAuthorized  , isVerified } = useAuthorize();
  console.log(isAuthenticated, isAuthorized);

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading){
      toast.error("کاربر عزیز , پروفایل شما هنوز تایید نشده است")
      navigate("/")
    }
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-dark-0 dark:bg-dark-900 ">
        <Loading size="md" />
      </div>
    );
  }

  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
