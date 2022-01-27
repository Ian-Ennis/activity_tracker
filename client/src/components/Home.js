import React, { useState } from "react";
const backend_API = `http://localhost:3000/activities`;

export default function Main({ header, handleActivitySubmit }) {
  const { activityHash, setActivityHash } = useState([]);

  function handleActivitySubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const minutes = e.target.minutes.value;

    fetch(`${backend_API}`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name,
        minutes
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div>
      <div className="header">{header}</div>
      <div className="site_info">
        <p>
          Down to meditate? Into yoga? Always on the move? Log your self-care
          sessions using the menu below, and keep track of your kick-ass
          routines as you practice.
        </p>
      </div>
      <form onSubmit={handleActivitySubmit}>
        <input type="text" name="name" placeholder="Name of activity" />
        <input type="number" name="minutes" placeholder="Time (minutes)" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
