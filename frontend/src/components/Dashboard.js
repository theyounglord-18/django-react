import React from "react";
import Cookies from "js-cookie";

function Dashboard() {
  const role = Cookies.get("role");

  if (role === "STUDENT") {
    return <h2>Welcome to the Student Dashboard</h2>;
  } else if (role === "ADMIN") {
    return <h2>Welcome to the Admin Dashboard</h2>;
  } else if (role === "INSTRUCTOR") {
    return <h2>Welcome to the Instructor Dashboard</h2>;
  } else {
    return <h2>Invalid Role</h2>;
  }
}

export default Dashboard;
