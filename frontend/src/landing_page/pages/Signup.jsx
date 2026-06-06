import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Signup</h2>
      
      {/* Display error message if registration fails */}
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="username"
          placeholder="Name"
          value={formData.username}
          onChange={handleChange}
          required
          style={{ padding: "8px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "8px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ padding: "8px" }}
        />
        <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Signup;