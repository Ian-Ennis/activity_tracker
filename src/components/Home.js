import React, { useState } from "react";
import Select from "react-select";
import Meditation from "./Activities/Meditation/Meditation";
import Yoga from "./Activities/Yoga/Yoga";
import Cardio from "./Activities/Cardio/Cardio";
const backend_API = `http://localhost:3000/activities`;

function Home({ currentUser }) {
  const [activityHash, setActivityHash] = useState(null);
  const [activity, setActivity] = useState("");
  const [selected, setSelected] = useState(false);

  console.log('current user:', currentUser)

  const activityOptions = [
    { value: "meditation", label: "🧘 Meditation" },
    { value: "yoga", label: "🤸‍♂️ Yoga" },
    { value: "cardio", label: "🏃🏽 Cardio" },
  ];

  function askToDelete(e, meditation) {
    e.preventDefault();

    window.confirm(`Delete ${activity} from database?`);

    if (window.confirm) {
      fetch(`${backend_API}/${meditation.id}`, {
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

  if (localStorage.getItem('token')) {
  return (
    <>
      <div className="welcome_blurb">
        <h5>Welcome, {localStorage.getItem("current user")}</h5>
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
              <Meditation currentUser={currentUser} activity={activity} activityHash={activityHash} setActivityHash={setActivityHash} askToDelete={askToDelete} />
            ) : null}
            {activity === "yoga" ? (
              <Yoga currentUser={currentUser} activity={activity} activityHash={activityHash} setActivityHash={setActivityHash} askToDelete={askToDelete} />
            ) : null}
            {activity === "cardio" ? (
              <Cardio currentUser={currentUser} activity={activity} activityHash={activityHash} setActivityHash={setActivityHash} askToDelete={askToDelete} />
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  )
} else {
  return (
    <div id="please_login">
      <h5>Please log in</h5>
    </div>
  );
}
}

export default Home;
