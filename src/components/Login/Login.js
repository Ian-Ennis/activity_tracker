import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedIn, setCurrentUser }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const userCreds = { ...formData };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          localStorage.setItem("token", data.token);
          setLoggedIn(true);
          setCurrentUser(data)
          setFormData({
            username: "",
            password: "",
          });
          navigate("/activities");
        });
      } else {
        response.json().then((err) => {
          console.log(err);
        });
      }
    });
  }

  return (
      <div class="signup_login">
        <h5>Enter your login</h5>
        <form className="signup_login_form" onSubmit={handleSubmit}>
          <div className="username">
            <label htmlFor="username">Username</label>
            <input
              id="username-input"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="pass">
            <label htmlFor="password">Password</label>
            <input
              id="password-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <button id="need_account" onClick={() => navigate("/")}>
          Create new account
        </button>
      </div>
  );
}

export default Login;
