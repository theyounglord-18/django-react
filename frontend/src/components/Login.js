import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "../App.css"

function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/token/", credentials);
      const { token, role } = res.data;

      Cookies.set("token", token);
      Cookies.set("role", role);

      navigate("/dashboard");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
  <h2 className="login-title">Login</h2>
  <form className="login-form" onSubmit={handleSubmit}>
    <input
      className="login-input"
      name="username"
      placeholder="Username"
      onChange={handleChange}
      required
    />
    <input
      className="login-input"
      name="password"
      type="password"
      placeholder="Password"
      onChange={handleChange}
      required
    />
    <button className="login-button" type="submit">Login</button>
  </form>
</div>

  );
}

export default Login;
