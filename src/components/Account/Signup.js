import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ setLoggedIn, setCurrentUser }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [accountExists, setAccountExists] = useState(false)
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

    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log('sign-up data:', data)
          localStorage.setItem("token", data.jwt);
          setCurrentUser(data.user)
          setFormData({
            username: "",
            password: "",
          });
          navigate("/login")
        });
      } else {
        setAccountExists(true)
        response.json();
      }
    });
  }

  return (
    <div className="signup_login">
      <h5>Welcome!</h5>
      <form className="signup_login_form" onSubmit={handleSubmit}>
        <div className="username">
          <label htmlFor="username">Username</label>
          <input
          id="username-signup-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        </div>
        <div className="pass">
          <label htmlFor="password">Password</label>
          <input
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        </div>
        <button type="submit">Sign me up!</button>
      </form>
      {accountExists ? <p><em>Account already exists.</em></p> : null}
      <button id="have_account" onClick={() => navigate("/login")}>
        Log in
      </button> 
    </div>
  );
}

export default SignUp;