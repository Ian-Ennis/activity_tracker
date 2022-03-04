import React, { useState } from "react";
import Select from "react-select";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import MeditationTable from "./Tables/MeditationTable";
import YogaTable from "./Tables/YogaTable";
import CardioTable from "./Tables/CardioTable";
const backend_API = `http://localhost:3000/activities`;

function ActivityForms({ header }) {
  const [activityHash, setActivityHash] = useState([]);
  const [activity, setActivity] = useState("");
  const [selected, setSelected] = useState(false);

  const activityOptions = [
    { value: "meditation", label: "🧘 Meditation" },
    { value: "yoga", label: "🤸‍♂️ Yoga" },
    { value: "cardio", label: "🏃🏽 Cardio" },
  ];

  const meditationLabels = [];
  const yogaLabels = [];
  const cardioLabels = [];

  const meditationSessions = [];
  const yogaSessions = [];
  const cardioSessions = [];

  if (activityHash.length) {
    for (let i = 0; i < activityHash.length; i++) {
      if (activityHash[i].name === "meditation") {
        meditationLabels.push(activityHash[i].id)
        meditationSessions.push(activityHash[i])
      } else if (activityHash[i].name === "yoga") {
        yogaLabels.push(activityHash[i].id)
        yogaSessions.push(activityHash[i])
      } else if (activityHash[i].name === "cardio") {
        cardioLabels.push(activityHash[i].id)
        cardioSessions.push(activityHash[i])
      }
  }
}

  console.log(meditationLabels)
  console.log(yogaLabels)
  console.log(cardioLabels)

  console.log(meditationSessions)
  console.log(yogaSessions)
  console.log(cardioSessions)

  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Time dedicated",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

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
    <>
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
          onChange={(e) => {
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
                    <input
                      type="number"
                      name="minutes"
                      placeholder="Time (minutes)"
                    />
                    <input type="text" name="notes" placeholder="Notes?" />
                    <button type="submit">Submit</button>
                  </div>
                </form>
                <MeditationTable
                  activity={activity}
                  activityHash={activityHash}
                  askToDelete={askToDelete}
                />
                <div className="bar_chart">
                  <Bar
                    data={{
                      labels: meditationLabels,
                      datasets: [
                        {
                          label: "Time dedicated",
                          backgroundColor: "rgba(75,192,192,1)",
                          borderColor: "rgba(0,0,0,1)",
                          borderWidth: 2,
                          data: [meditationSessions[0].minutes, meditationSessions[1].minutes, meditationSessions[2].minutes],
                        },
                      ],
                    }}
                    options={{
                      title: {
                        display: true,
                        text: "Average Rainfall per month",
                        fontSize: 20,
                      },
                      legend: {
                        display: true,
                        position: "right",
                      },
                    }}
                  />
                </div>
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
                    <input type="text" name="notes" placeholder="Notes?" />
                    <button type="submit">Submit</button>
                  </div>
                </form>
                <YogaTable
                  activity={activity}
                  activityHash={activityHash}
                  askToDelete={askToDelete}
                />
                <div className="bar_chart">
                  <Bar
                    data={{
                      labels: yogaLabels,
                      datasets: [
                        {
                          label: "Time dedicated",
                          backgroundColor: "rgba(75,192,192,1)",
                          borderColor: "rgba(0,0,0,1)",
                          borderWidth: 2,
                          data: [yogaSessions[0].minutes, yogaSessions[1].minutes, yogaSessions[2].minutes],
                        },
                      ],
                    }}
                    options={{
                      title: {
                        display: true,
                        text: "Average Rainfall per month",
                        fontSize: 20,
                      },
                      legend: {
                        display: true,
                        position: "right",
                      },
                    }}
                  />
                </div>
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
                    <input type="text" name="notes" placeholder="Notes?" />
                    <button type="submit">Submit</button>
                  </div>
                </form>
                <CardioTable
                  activity={activity}
                  activityHash={activityHash}
                  askToDelete={askToDelete}
                />
                <div className="bar_chart">
                  <Bar
                    data={{
                      labels: cardioLabels,
                      datasets: [
                        {
                          label: "Time dedicated",
                          backgroundColor: "rgba(75,192,192,1)",
                          borderColor: "rgba(0,0,0,1)",
                          borderWidth: 2,
                          data: [cardioSessions[0].minutes, cardioSessions[1].minutes, cardioSessions[2].minutes],
                        },
                      ],
                    }}
                    options={{
                      title: {
                        display: true,
                        text: "Average Rainfall per month",
                        fontSize: 20,
                      },
                      legend: {
                        display: true,
                        position: "right",
                      },
                    }}
                  />
                </div>
              </>
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ActivityForms
