import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Dashboard() {
  const navigate = useNavigate();
  const role = Cookies.get("role");

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("role");
    navigate("/login");
  };

  let heading = "";
  let description = "";
  let imageUrl = "";

  if (role === "STUDENT") {
    heading = "Welcome to the Student Dashboard";
    description = "Here you can view your enrolled courses, track progress, and access study materials.";
    imageUrl = "https://cdn-icons-png.flaticon.com/512/3135/3135755.png";
  } else if (role === "ADMIN") {
    heading = "Welcome to the Admin Dashboard";
    description = "Manage users, configure settings, and monitor platform activities.";
    imageUrl = "https://cdn-icons-png.flaticon.com/512/1828/1828817.png";
  } else if (role === "INSTRUCTOR") {
    heading = "Welcome to the Instructor Dashboard";
    description = "Create, manage, and grade courses or assignments for students.";
    imageUrl = "https://cdn-icons-png.flaticon.com/512/2922/2922510.png";
  } else {
    heading = "Invalid Role";
    description = "Please log in again with a valid role.";
  }

  return (
    <div className="dashboard-container">
      <h2>{heading}</h2>
      {imageUrl && <img src={imageUrl} alt={role} className="role-image" />}
      <p className="description">{description}</p>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;

