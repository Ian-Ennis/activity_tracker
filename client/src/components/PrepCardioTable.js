import React from "react";
import RenderCardioActivity from "./RenderCardioActivity";

export default function PrepCardioTable({ activityHash }) {

  const table = [];
  const cardioWorkouts = [];

  activityHash?.forEach((activity) => {
    if (activity.name === "cardio") {
        cardioWorkouts.push(activity)
    };
  });

  if (activityHash !== '') {
    //   console.log('activity hash has data')
    const table = cardioWorkouts.map((a) => {
      return (
        <tr key={a.id}>
          <td></td>
          <td>{a.workout}</td>
          <td>{a.distance} minutes</td>
          <td>{a.minutes}</td>
        </tr>
      );
    });
    return <RenderCardioActivity table={table} />
  } else {
    //   console.log('activity hash is empty')
    return null;
  }
}
