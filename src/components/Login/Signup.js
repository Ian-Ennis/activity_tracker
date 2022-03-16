import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const API = "http://localhost:3000/api/v1";

function SignUp({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("jwt"))
    if (localStorage.getItem("jwt")) {navigate("activity_forms")}
  })

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`${API}/users`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { username, password } }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("Here is the something", json);
        setUsername("");
        setPassword("");
        navigate("/activity_forms")
      })
  }

  return (
    <div className="signup_login">
      <form className="signup_login_form" onSubmit={handleSubmit}>
        <div className="username">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="pass">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register Me!</button>
      </form>
      <button id="have_account" onClick={() => navigate("/login")}>
        I am a returning user
      </button>
    </div>
  );
}

export default SignUp;
