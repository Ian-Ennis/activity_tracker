import React, { useState } from "react";
import Select from "react-select";
import MeditationTable from "./Tables/MeditationTable";
import YogaTable from "./Tables/YogaTable";
import CardioTable from "./Tables/CardioTable";
const backend_API = `http://localhost:3000/activities`;

function ActivityForms({ header }) {
  const [activityHash, setActivityHash] = useState([]);
  const [activity, setActivity] = useState("");

  const activityOptions = [
    { value: "meditation", label: "🧘 Meditation" },
    { value: "yoga", label: "🤸‍♂️ Yoga" },
    { value: "cardio", label: "🏃🏽 Cardio" },
  ];

  function handleMeditationSubmit(e) {
    e.preventDefault();

    const name = activity;
    const minutes = e.target.minutes.value;
    const notes = e.target.notes.value;

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
        notes,
      }),
    }).then(() => {
      fetch(`${backend_API}`, {
        method: "GET",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setActivityHash(data);
        });
    });
  }

  function handleYogaSubmit(e) {
    e.preventDefault();
    setActivityHash([]);

    const name = activity;
    const yoga_type = e.target.yoga_type.value;
    const minutes = e.target.minutes.value;
    const notes = e.target.notes.value;

    fetch(`${backend_API}`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name,
        yoga_type,
        minutes,
        notes,
      }),
    }).then(() => {
      fetch(`${backend_API}`, {
        method: "GET",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setActivityHash(data);
        });
    });
  }

  function handleCardioSubmit(e) {
    e.preventDefault();
    setActivityHash([]);

    const name = activity;
    const workout = e.target.workout.value;
    const distance = e.target.distance.value;
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
        workout,
        distance,
        minutes,
      }),
    }).then(() => {
      fetch(`${backend_API}`, {
        method: "GET",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setActivityHash(data);
        });
    });
  }

  function askToDelete(e, a) {
    e.preventDefault();
    window.confirm(`Delete ${activity} from database?`);
    if (window.confirm) {
      fetch(`${backend_API}/${a.id}`, {
        method: "DELETE",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }).then(() => {
        fetch(`${backend_API}`, {
          method: "GET",
          headers: {
            Accepts: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setActivityHash(data);
          });
      });
    }
  }

  return (
    <div>
      <div className="header">{header}</div>
      <div className="site_info">
        <h5>
          Down to meditate? Into yoga? Always on the move? Get a Leg-Up on life
          by logging your self-care sessions using the menu below, so you can
          keep track of your kick-ass routines as you do them.
        </h5>
      </div>
      <div className="activity_div">
        <Select
          className="activity_dropdown"
          autofocus
          isSearchable
          placeholder="Select activity"
          options={activityOptions}
          onChange={(e) => setActivity(e.value)}
        />
        <div className="forms">
          {activity === "meditation" ? (
            <>
              <form className="form" onSubmit={handleMeditationSubmit}>
                <label for="name">Meditation Session:</label>
                <div className="inputs">
                  <input
                    type="number"
                    name="minutes"
                    placeholder="Time (minutes)"
                  />
                  <input
                    type="text"
                    name="notes"
                    placeholder="Notes"
                  />
                  <button type="submit">Submit</button>
                </div>
              </form>
              <MeditationTable
                activity={activity}
                activityHash={activityHash}
                askToDelete={askToDelete}
              />
            </>
          ) : null}
          {activity === "yoga" ? (
            <>
              <form className="form" onSubmit={handleYogaSubmit}>
                <label for="name">Yoga Session:</label>
                <div className="inputs">
                  <input
                    type="text"
                    name="yoga_type"
                    placeholder="Type (Hatha, etc)"
                  />
                  <input
                    type="number"
                    name="minutes"
                    placeholder="Time (minutes)"
                  />
                  <input
                    type="text"
                    name="notes"
                    placeholder="Notes"
                  />
                  <button type="submit">Submit</button>
                </div>
              </form>
              <YogaTable
                activity={activity}
                activityHash={activityHash}
                askToDelete={askToDelete}
              />
            </>
          ) : null}
          {activity === "cardio" ? (
            <>
              <form className="form" onSubmit={handleCardioSubmit}>
                <label for="name">Cardio workout:</label>
                <div className="inputs">
                  <input
                    type="text"
                    name="workout"
                    placeholder="Type (walk/run/hike)"
                  />
                  <input
                    type="number"
                    name="distance"
                    placeholder="Distance (miles)"
                  />
                  <input
                    type="number"
                    name="minutes"
                    placeholder="Time (minutes)"
                  />
                  <input
                    type="text"
                    name="notes"
                    placeholder="Notes"
                  />
                  <button type="submit">Submit</button>
                </div>
              </form>
              <CardioTable
                activity={activity}
                activityHash={activityHash}
                askToDelete={askToDelete}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ActivityForms;
