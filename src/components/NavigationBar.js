import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavigationBar({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  if (!loggedIn) {
    return (
      <nav>
        <Link to="/">Login</Link> |{" "}
        <Link to="/home">Home</Link> |{" "}
        <Link to="/resources">Resources</Link>
      </nav>
    );
  } else {
    return (
      <nav>
        <Link
          to="/"
          onClick={() => {
            localStorage.clear();
            setLoggedIn(false);
            navigate("/login");
          }}
        >
          Logout
        </Link>{" "}
        | <Link to="/home">Home</Link> |{" "}
        <Link to="/resources">Resources</Link>
      </nav>
    );
  }
}

export default NavigationBar;
