import '../App.css';

function StudentDashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome, Student!</h2>
      <p>Your Tech Stack: <strong>Python Fullstack</strong></p>

      <div className="section">
        <h3>Upcoming Sessions</h3>
        <ul>
          <li>Intro to Django - July 10</li>
          <li>React Basics - July 12</li>
        </ul>
      </div>

      <div className="section">
        <h3>Assignments</h3>
        <ul>
          <li>
            Django Models - Due July 14 <button>Submit</button>
          </li>
          <li>
            React Components - Submitted on July 5
          </li>
          <li>
            DRF API Design - Graded: A <br /><small>Feedback: Great work!</small>
          </li>
        </ul>
      </div>

      <div className="section">
        <h3>Grades Overview</h3>
        <p>Average Grade: A-</p>
        <p>Total Submissions: 6</p>
      </div>
    </div>
  );
}

export default StudentDashboard;
