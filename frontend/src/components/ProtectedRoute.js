
import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function ProtectedRoute({ component: Component }) {
  const token = Cookies.get("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Component />;
}

export default ProtectedRoute;
