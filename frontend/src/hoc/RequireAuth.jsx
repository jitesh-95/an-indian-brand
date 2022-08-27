import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const { pathname } = useLocation();

  if (isAuth) return children;
  return <Navigate to="/login" state={{ from: pathname }} replace />;
};

export default RequireAuth;
