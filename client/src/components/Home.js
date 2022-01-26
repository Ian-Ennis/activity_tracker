import { useEffect, useState } from "react";
import Select from "react-select";
import MeditationForm from "./MeditationForm";
import YogaForm from "./YogaForm";
import CardioForm from "./CardioForm";

export default function Home({ header, activity, setActivity }) {
  const initialOptions = [
    { value: "meditation", label: "🧘 Meditation" },
    { value: "yoga", label: "🤸‍♂️ Yoga" },
    { value: "cardio", label: "🏃🏽 Cardio" }
    ];

  const [activityOptions, setActivityOptions] = useState(initialOptions);
  // const [meditationSessions, setMeditationSessions] = useState(false);
  // const [yogaSessions, setYogaSessions] = useState(false);
  // const [cardioSessions, setCardioSessions] = useState(false);

  function selectActivity(e) {
    setActivity(e.value);
  }

  // useEffect(() => {
  //   fetch(`/activities`)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         console.log("Reponse was bad");
  //       }
  //     })
  //     .then(console.log("attempt to fetch activities"))
  //     .catch((err) => {
  //       console.log(`${err}; failed to fetch activities`);
  //     });
  // }, []);

  function handleMeditationSubmit(e) {
    e.preventDefault();
    // setMeditationSessions(true)

    const time = e.target.time.value;
    const date = e.target.date.value;

    fetch("/meditation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time: time,
        date: date
      }),
    });
  }

  function handleYogaSubmit(e) {
    e.preventDefault();
    // setYogaSessions(true)

    const time = e.target.time.value;
    const type = e.target.type.value;
    const date = e.target.date.value;

    fetch("/yoga", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time: time,
        type: type,
        date: date,
      }),
    });
  }

  function handleCardioSubmit(e) {
    e.preventDefault();
    // setCardioSessions(true)

    const type = e.target.type.value;
    const distance = e.target.distance.value;
    const time = e.target.time.value;
    const date = e.target.date.value;

    fetch("/meditation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
        distance: distance,
        time: time,
        date: date,
      }),
    });
  }

  function seeProgress() {
    console.log(activity);
    // do the route to /${activity}
    // incorporate commented-out State for meditationSessions(true) etc, if needed to do the render.
  }

  return (
    <div>
      <div class="header">{header}</div>
      <div class="site_info">
        <p>
          Down to meditate? Into yoga? Always on the move? Log your self-care
          sessions using the menu below, and keep track of your kick-ass
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
        <MeditationForm
          handleMeditationSubmit={handleMeditationSubmit}
          activity={activity}
          seeProgress={seeProgress}
        />
      ) : null}
      {activity === 'yoga' ? (
        <YogaForm
          handleYogaSubmit={handleYogaSubmit}
          activity={activity}
          seeProgress={seeProgress}
        />
      ) : null}
      {activity === 'cardio' ? (
        <CardioForm
          handleCardioSubmit={handleCardioSubmit}
          activity={activity}
          seeProgress={seeProgress}
        />
      ) : null}
    </div>
  );
}
