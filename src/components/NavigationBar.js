import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavigationBar({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  if (!loggedIn) {
    return (
      <nav>
        <Link to="/">Login</Link> |{" "}
        <Link to="/activities">Activity Tracker</Link> |{" "}
        <Link to="/resources">Resources</Link>
      </nav>
    );
  } else {
    return (
      <nav>
        <Link
          to="/"
          onClick={() => {
            localStorage.setItem("token", "");
            setLoggedIn(false);
            navigate("/login");
          }}
        >
          Logout
        </Link>{" "}
        | <Link to="/activities">Activity Tracker</Link> |{" "}
        <Link to="/resources">Resources</Link>
      </nav>
    );
  }
}

export default NavigationBar;
