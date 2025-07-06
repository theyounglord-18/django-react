import React from "react";
import "../App.css"

function InstructorDashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome, Instructor!</h2>
      <p>Your Tech Stack: <strong>Python Fullstack</strong></p>

      <div className="section">
        <h3>My Class Sessions</h3>
        <ul>
          <li>Intro to Django - July 10 <button>Edit</button></li>
          <li>REST API with DRF - July 15 <button>Edit</button></li>
        </ul>
        <button>Create New Session</button>
      </div>

      <div className="section">
        <h3>Assignments</h3>
        <ul>
          <li>
            Django Models - <button>View Submissions (4)</button>
          </li>
          <li>
            React Components - <button>View Submissions (2)</button>
          </li>
        </ul>
        <button>Create New Assignment</button>
      </div>

      <div className="section">
        <h3>Submission Grading</h3>
        <p>2 Pending Grades</p>
        <button>Grade Now</button>
      </div>
    </div>
  );
}

export default InstructorDashboard;
