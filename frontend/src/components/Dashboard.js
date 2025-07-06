import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";
import InstructorDashboard from "./InstructorDashboard";
import "../App.css"

function Dashboard() {
  const navigate = useNavigate();
  const role = Cookies.get("role");

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("role");
    navigate("/login");
  };

  const renderDashboard = () => {
    switch (role) {
      case "STUDENT":
        return <StudentDashboard />;
      case "ADMIN":
        return <AdminDashboard />;
      case "INSTRUCTOR":
        return <InstructorDashboard />;
      default:
        return (
          <div className="dashboard-container">
            <h2>Invalid Role</h2>
            <p>Please log in again with a valid role.</p>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        );
    }
  };

  return (
    <div>
      {renderDashboard()}
      {role && role !== "INVALID" && (
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      )}
    </div>
  );
}

export default Dashboard;

