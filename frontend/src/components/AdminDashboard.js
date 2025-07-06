import React from "react";
import "../App.css";

function AdminDashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome, Admin!</h2>

      <div className="section">
        <h3>User Management</h3>
        <ul>
          <li>Devender (Student) <button>Edit</button></li>
          <li>Alice (Instructor) <button>Edit</button></li>
        </ul>
        <button>Add New User</button>
      </div>

      <div className="section">
        <h3>Tech Stack Management</h3>
        <ul>
          <li>Python Fullstack <button>Edit</button></li>
          <li>MERN Stack <button>Edit</button></li>
        </ul>
        <button>Add Tech Stack</button>
      </div>

      <div className="section">
        <h3>Platform Overview</h3>
        <p>Total Users: 50</p>
        <p>Students: 30 | Instructors: 15 | Admins: 5</p>
        <p>Active Sessions: 12</p>
        <p>Total Submissions: 140</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
