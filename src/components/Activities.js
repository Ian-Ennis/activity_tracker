import React, { useState } from "react";
import Select from "react-select";
import MeditationTable from "./Tables/MeditationTable";
import YogaTable from "./Tables/YogaTable";
import CardioTable from "./Tables/CardioTable";
import MeditationChart from "./Charts/MeditationChart";
import YogaChart from "./Charts/YogaChart";
import CardioChart from "./Charts/CardioChart";
const backend_API = `http://localhost:3000/activities`;

function Activities({ currentUser, setCurrentUser }) {
  const [activityHash, setActivityHash] = useState([]);
  const [activity, setActivity] = useState("");
  const [selected, setSelected] = useState(false);

  const activityOptions = [
    { value: "meditation", label: "🧘 Meditation" },
    { value: "yoga", label: "🤸‍♂️ Yoga" },
    { value: "cardio", label: "🏃🏽 Cardio" },
  ];

  const meditationSessions = [];
  const yogaSessions = [];
  const cardioSessions = [];

  const meditationLabels = [];
  const yogaLabels = [];
  const cardioLabels = [];

  const meditationTime = [];
  const yogaTime = [];
  const cardioTime = [];

  if (activityHash.length) {
    for (let i = 0; i < activityHash.length; i++) {
      if (activityHash[i].name === "meditation") {
        meditationLabels.push(activityHash[i].date);
        meditationSessions.push(activityHash[i]);
        meditationTime.push(activityHash[i].minutes);
      } else if (activityHash[i].name === "yoga") {
        yogaLabels.push(activityHash[i].date);
        yogaSessions.push(activityHash[i]);
        yogaTime.push(activityHash[i].minutes);
      } else if (activityHash[i].name === "cardio") {
        cardioLabels.push(activityHash[i].date);
        cardioSessions.push(activityHash[i]);
        cardioTime.push(activityHash[i].minutes);
      }
    }
  }

  function handleMeditationSubmit(e) {
    e.preventDefault();

    const date = e.target.date.value;
    const name = activity;
    const minutes = e.target.minutes.value;
    const notes = e.target.notes.value;

    fetch(`${backend_API}`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        date,
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
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setActivityHash(data);
        });
    });
  }

  function handleYogaSubmit(e) {
    e.preventDefault();
    setActivityHash([]);

    const date = e.target.date.value;
    const name = activity;
    const yoga_type = e.target.yoga_type.value;
    const minutes = e.target.minutes.value;
    const notes = e.target.notes.value;

    fetch(`${backend_API}`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        date,
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
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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

    const date = e.target.date.value;
    const name = activity;
    const workout = e.target.workout.value;
    const distance = e.target.distance.value;
    const minutes = e.target.minutes.value;
    const notes = e.target.notes.value;

    fetch(`${backend_API}`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        date,
        name,
        workout,
        distance,
        minutes,
        notes,
      }),
    }).then(() => {
      fetch(`${backend_API}`, {
        method: "GET",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then(() => {
        fetch(`${backend_API}`, {
          method: "GET",
          headers: {
            Accepts: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    <>
      <div className="welcome_blurb">
        <h5>
          Down to meditate? Into yoga? Always on the move? Get a Leg-Up on life
          by logging your self-care sessions using the menu below, so you can
          keep track of your self-care practice.
        </h5>
      </div>
      <div className="activity_div">
        <Select
          className="activity_dropdown"
          autofocus
          isSearchable
          placeholder="Select an activity to submit new sessions, and see your progress!"
          options={activityOptions}
          onChange={(e) => {
            fetch(`${backend_API}`, {
              method: "GET",
              headers: {
                Accepts: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                setActivityHash(data);
                setSelected(true);
                setActivity(e.value);
              });
          }}
        />
        {selected ? (
          <div className="forms">
            {activity === "meditation" ? (
              <>
                <form className="form" onSubmit={handleMeditationSubmit}>
                  <label for="name">Meditation Session:</label>
                  <div className="inputs">
                    <input type="text" name="date" placeholder="MM/DD/YYYY" />
                    <input
                      type="number"
                      name="minutes"
                      placeholder="Time (minutes)"
                    />
                    <input type="text" name="notes" placeholder="Notes?" />
                    <button type="submit">Submit</button>
                  </div>
                </form>
                {meditationSessions.length ? (
                  <MeditationChart
                    meditationLabels={meditationLabels}
                    meditationTime={meditationTime}
                  />
                ) : null}
                <MeditationTable
                  meditationSessions={meditationSessions}
                  askToDelete={askToDelete}
                />
              </>
            ) : null}
            {activity === "yoga" ? (
              <>
                <form className="form" onSubmit={handleYogaSubmit}>
                  <label for="name">Yoga Session:</label>
                  <div className="inputs">
                    <input type="text" name="date" placeholder="MM/DD/YYYY" />
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
                    <input type="text" name="notes" placeholder="Notes?" />
                    <button type="submit">Submit</button>
                  </div>
                </form>
                {yogaSessions.length ? (
                  <YogaChart yogaLabels={yogaLabels} yogaTime={yogaTime} />
                ) : null}
                <YogaTable
                  yogaSessions={yogaSessions}
                  askToDelete={askToDelete}
                />
              </>
            ) : null}
            {activity === "cardio" ? (
              <>
                <form className="form" onSubmit={handleCardioSubmit}>
                  <label for="name">Cardio workout:</label>
                  <div className="inputs">
                    <input type="text" name="date" placeholder="MM/DD/YYYY" />
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
                    <input type="text" name="notes" placeholder="Notes?" />
                    <button type="submit">Submit</button>
                  </div>
                </form>
                {cardioSessions.length ? (
                  <CardioChart
                    cardioLabels={cardioLabels}
                    cardioTime={cardioTime}
                  />
                ) : null}
                <CardioTable
                  cardioSessions={cardioSessions}
                  askToDelete={askToDelete}
                />
              </>
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Activities;
