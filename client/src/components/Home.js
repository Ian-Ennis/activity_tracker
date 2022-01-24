import { useEffect, useState } from "react";
import Select from "react-select";
import MeditationForm from "./MeditationForm";
import YogaForm from "./YogaForm";
import CardioForm from "./CardioForm";
import NewActivityForm from "./NewActivityForm";

export default function Home({ header, activity, setActivity }) {
  const initialOptions = [
    { value: "meditation", label: "🧘 Meditation" },
    { value: "yoga", label: "🤸‍♂️ Yoga" },
    { value: "cardio", label: "🏃🏽 Cardio" },
    { value: "create_new", label: "✏️ Add your own activity!" },
  ];
  const [activityOptions, setActivityOptions] = useState(initialOptions);
  const [stateUpdater, setStateUpdater] = useState("");
  // const [activityState, setActivityState] = useState('');

  function selectActivity(e) {
    console.log("inside update activity function");
    console.log(e.value);
    setActivity(e.value);
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
    console.log(e.target);
    setStateUpdater(activity);
    // console.log(stateUpdater)

    // POST request
    // const medSession = {
    //   time,
    //   date,
    // };

    // fetch("/meditation"),
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(medSession),
    //   };
  }

  function handleYogaSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    // POST request
    // const yogaSession = {
    //   type,
    //   time,
    //   date,
    // };

    // fetch("/yoga"),
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(yogaSession),
    //   };
  }

  function handleCardioSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    // POST request
    // const cardioSession = {
    //   type,
    //   distance,
    //   time,
    //   date,
    // };

    // fetch("/cardio"),
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(cardioSession),
    //   };
  }

  function handleNewActivitySubmit(e) {
    e.preventDefault();
    console.log(e.target);
    // POST request
  }

  return (
    <div>
      <div class="header">{header}</div>
      <div class="site_info">
        <p>
          Down to meditate? Into yoga? Always on the move? Log your self-care
          sessions using the menu below, and keep track of your kick-ass
          routines as you practice. Or, add a new routine entirely. You do you!
        </p>
      </div>
      <Select
        className="activity_dropdown"
        autofocus
        isSearchable
        placeholder="Select activity"
        onChange={selectActivity}
        options={activityOptions}
      />
      {activity === "meditation" ? (
        <MeditationForm handleMeditationSubmit={handleMeditationSubmit} />
      ) : null}
      {activity === "yoga" ? (
        <YogaForm handleYogaSubmit={handleYogaSubmit} />
      ) : null}
      {activity === "cardio" ? (
        <CardioForm handleCardioSubmit={handleCardioSubmit} />
      ) : null}
      {activity === "create_new" ? (
        <NewActivityForm handleNewActivitySubmit={handleNewActivitySubmit} />
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
