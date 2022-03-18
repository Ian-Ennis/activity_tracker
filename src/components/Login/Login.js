import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          localStorage.setItem("token", data.token);
          setLoggedIn(true);
          setUsername("");
          setPassword("");
          navigate("/activities");
        });
      } else {
        r.json().then((err) => {
          console.log(err);
        });
      }
    });
  }

  return (
      <div class="signup_login">
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
          <button type="submit">Login</button>
        </form>
        <button id="need_account" onClick={() => navigate("/")}>
          Create new account
        </button>
      </div>
  );
}

export default Login;
