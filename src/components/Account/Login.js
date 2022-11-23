import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedIn, setCurrentUser }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [noAccountExists, setNoAccountExists] = useState(false)
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

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log('login data:', data)
          localStorage.setItem("token", data.jwt);
          localStorage.setItem("current user", data.user.username)
          setCurrentUser(data.user)
          setLoggedIn(true);
          setFormData({
            username: "",
            password: "",
          });
          navigate("/home");
        });
      } else {
        response.json().then((err) => {
          console.log("login response is bad")
          setNoAccountExists(true)
          console.log(err);
        });
      }
    });
  }

  return (
      <div className="signup_login">
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
        {noAccountExists ? <><p><em>Double check your spelling.</em></p>
        <p><em>Need an account?</em></p></> : null}
        <button id="need_account" onClick={() => navigate("/")}>
          Create account
        </button>
      </div>
  );
}

export default Login;
