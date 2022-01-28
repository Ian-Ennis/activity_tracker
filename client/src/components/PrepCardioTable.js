import React from "react";
import RenderCardioActivity from "./RenderCardioActivity";

export default function PrepCardioTable({ activityHash, askToDelete }) {
  const cardioWorkouts = [];

  if (activityHash.length) {
    activityHash.forEach((activity) => {
      if (activity.name === "cardio") {
        cardioWorkouts.push(activity);
      }
    });

    const table = cardioWorkouts.map((a) => {
      return (
        <tr key={a.id}>
          <td></td>
          <td>{a.workout}</td>
          <td>{a.distance}</td>
          <td>{a.minutes}</td>
          <td>
            <button onClick={(e) => askToDelete(e, a)}>Delete activity</button>
          </td>
        </tr>
      );
    });
    return <RenderCardioActivity table={table} />;
  } else {
    return null;
  }
}
