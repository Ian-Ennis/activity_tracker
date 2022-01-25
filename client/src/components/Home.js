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
  const [meditationSessions, setmeditationSessions] = useState(false);
  const [yogaSessions, setyogaSessions] = useState(false);
  const [cardioSessions, setcardioSessions] = useState(false);

  function selectActivity(e) {
    console.log("inside update activity function");
    setActivity(e.value);
    console.log(activity);
  }

  useEffect(() => {
    fetch(`/activities`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("Reponse was bad");
        }
      })
      .then(console.log("attempt to fetch activities"))
      .catch((err) => {
        console.log(`${err}; failed to fetch activities`);
      });
  }, []);

  function handleMeditationSubmit(e) {
    e.preventDefault();
    setmeditationSessions(true)

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
    setyogaSessions(true)

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
    setcardioSessions(true)

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
      {activity === "meditation" ? (
        <MeditationForm
          handleMeditationSubmit={handleMeditationSubmit}
          activity={activity}
          seeProgress={seeProgress}
        />
      ) : null}
      {activity === "yoga" ? (
        <YogaForm
          handleYogaSubmit={handleYogaSubmit}
          activity={activity}
          seeProgress={seeProgress}
        />
      ) : null}
      {activity === "cardio" ? (
        <CardioForm
          handleCardioSubmit={handleCardioSubmit}
          activity={activity}
          seeProgress={seeProgress}
        />
      ) : null}
    </div>
  );
}

// Learn how to do a POST on a submit event
// For monday: learn how to do a fetch on a click event
// Create a form to be rendered for each activity selection..?
// Learn how to update state upon setState if needed
// I think setting state on submit button will re-render and re-fetch updated tables?

// Back end
// Add login database code by merging ian_practice with main
// I think the routes we'll need for home are... /activities [:index] (GET)
// And /activities/meditation [:create] ()
// And /activities/yoga [:create]
// And /activities/cardio [:create]

// Goals:
// Decide how to show and build the database entries for meditation, yoga and cardio in their own tables
// Make a [:update] (PATCH) route, and [:destroy] (DELETE route) for these tables

// code for later
//   function customTheme(theme) {
//       return {
//           ...theme,
//           colors: {
//               ...theme.colors
//           }
//       }
//   }
