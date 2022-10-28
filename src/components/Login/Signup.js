import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ setLoggedIn, setCurrentUser }) {
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

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log("data:", data)
          localStorage.setItem("token", data.include[0].jwt);
          setLoggedIn(true)
          setCurrentUser(data)
          setFormData({
            username: "",
            password: "",
          });
          navigate("/activities")
        });
      } else {
        response.json();
        throw Error(response.status, response.statusText);
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
      <button id="have_account" onClick={() => navigate("/login")}>
        I am a returning user
      </button>
    </div>
  );
}

export default SignUp;