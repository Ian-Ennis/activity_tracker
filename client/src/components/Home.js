import React, { useEffect, useState } from "react";
import Select from "react-select";
import MeditationForm from './MeditationForm'
import YogaForm from "./YogaForm";
import CardioForm from './CardioForm'

export default function Home({ header, activity, setActivity }) {
  const initialOptions = [
      { value: "meditation", label: "🧘 Meditation" },
      { value: "yoga", label: "🤸‍♂️ Yoga" },
      { value: "cardio", label: "🏃🏽 Cardio" },
    { value: "create_new", label: "✏️ Add your own activity!" },
  ];
  const [activityOptions, setActivityOptions] = useState(initialOptions);

  useEffect(() => {
    fetch(`/activities`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Bad response");
        }
      })
      .then(setActivityOptions)
      .catch((err) => {
        console.log(`failed to fetch activities`);
      });
  }, []);

  function updateActivity(e) {
    console.log("inside update activity function");
    //   console.log(e.value)
    setActivity(e.value);
  }

  function handleMeditationSubmit(e) {
      e.preventDefault();
      console.log(e.target)
  }

  function handleYogaSubmit(e) {
    e.preventDefault();
    console.log(e.target)
}

function handleCardioSubmit(e) {
  e.preventDefault();
  console.log(e.target)
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
        // onClick={fetchActivities()}
        onChange={updateActivity}
        options={activityOptions}
      />
    {activity === 'meditation' ? <MeditationForm handleMeditationSubmit={handleMeditationSubmit}/> : null}
    {activity === 'yoga' ? <YogaForm handleYogaSubmit={handleYogaSubmit}/> : null}
    {activity === 'cardio' ? <CardioForm handleCardioSubmit={handleCardioSubmit}/> : null}
    </div>
  );
}

// Learn how to set state based on e.value
// For monday: learn how to do a fetch on a click event
// Create a form to be rendered for each activity selection
// Learn how to update state upon setState if needed

// code for later
//   function customTheme(theme) {
//       return {
//           ...theme,
//           colors: {
//               ...theme.colors
//           }
//       }
//   }
