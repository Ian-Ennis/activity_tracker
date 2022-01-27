import React, { useState } from "react";
import Select from "react-select";
const backend_API = `http://localhost:3000/activities`;

export default function Main({ header, handleActivitySubmit }) {
  const [activityHash, setActivityHash] = useState([]);
  const [activity, setActivity] = useState("");

  const activityOptions = [
    { value: "meditation", label: "🧘 Meditation" },
    { value: "yoga", label: "🤸‍♂️ Yoga" },
    { value: "cardio", label: "🏃🏽 Cardio" },
  ];

  function selectActivity(e) {
    setActivity(e.value);
  }

  function handleActivitySubmit(e) {
    e.preventDefault();
    
    const name = activity;
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
        minutes,
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
          Down to meditate? Into yoga? Always on the move? Get a Leg-Up on life by logging your self-care
          sessions using the menu below, so you can keep track of your kick-ass
          routines as you practice.
        </p>
      </div>
      <Select
        className="activity_dropdown"
        autofocus
        isSearchable
        placeholder="Select activity"
        options={activityOptions}
        onChange={selectActivity}
      />
      {activity === 'meditation' ? (
        <form onSubmit={handleActivitySubmit}>
        <label for="name">Meditation Session:</label>
        <input type="number" name="minutes" placeholder="Time (minutes)" />
        <button type="submit">Submit</button>
      </form>
      ) : null}
      {activity === 'yoga' ? (
        <form onSubmit={handleActivitySubmit}>
        <label for="name">Yoga Session:</label>
        <input type="number" name="minutes" placeholder="Time (minutes)" />
        <button type="submit">Submit</button>
      </form>
      ) : null}
      {activity === 'cardio' ? (
        <form onSubmit={handleActivitySubmit}>
        <label for="name">Walk, Run, Hike/ Trail-run:</label>
        <input type="number" name="minutes" placeholder="Time (minutes)" />
        <button type="submit">Submit</button>
      </form>
      ) : null}
    </div>
  );
}

