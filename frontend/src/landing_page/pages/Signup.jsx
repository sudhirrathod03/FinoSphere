import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import "../styles/auth.css";
// Environment variables must be declared after imports
const API_BASE = import.meta.env.VITE_API_URL;
function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors on new submission

    try {
      const res = await axios.post(`${API_BASE}/api/auth/register`, formData);
      localStorage.setItem("token", res.data.token);
      navigate("/"); // Redirect to home page after successful signup
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
      // Display the error nicely instead of using a browser alert
      setError(err.response?.data?.msg || "Registration failed. Please try again.");
    }
  };


    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>Create Account</h2>
          <p className="auth-subtitle">Join FinoSphere today</p>
    
          {error && <p className="error-msg">{error}</p>}
    
          <form onSubmit={handleSubmit} className="auth-form">
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
              required
            />
    
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
    
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
    
            <button type="submit">Create Account</button>
          </form>
    
          <p className="auth-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    );

}

export default Signup;