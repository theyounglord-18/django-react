import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", role: "STUDENT" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/users/", formData);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="register-container">
  <h2 className="register-title">Register</h2>
  <form className="register-form" onSubmit={handleSubmit}>
    <input
      className="register-input"
      name="username"
      placeholder="Username"
      onChange={handleChange}
      required
    />
    <input
      className="register-input"
      type="email"
      name="email"
      placeholder="Email"
      onChange={handleChange}
      required
    />
    <input
      className="register-input"
      type="password"
      name="password"
      placeholder="Password"
      onChange={handleChange}
      required
    />
    <select
      className="register-select"
      name="role"
      onChange={handleChange}
      required
    >
      <option value="">Select Role</option>
      <option value="STUDENT">STUDENT</option>
      <option value="ADMIN">ADMIN</option>
      <option value="INSTRUCTOR">INSTRUCTOR</option>
    </select>
    <button className="register-button" type="submit">Register</button>
  </form>
  <p className="login-prompt">
    Already registered? <a href="/login" className="login-link">Login</a>
  </p>
</div>

  );
}

export default Register;
