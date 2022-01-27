import React from "react";
import RenderMedActivity from "./RenderMedActivity";

export default function PrepMeditationTable({ activityHash, askToDelete }) {

  const table = []

  const meditationSessions = [];

  activityHash?.forEach((activity) => {
    if (activity.name === "meditation") {
        meditationSessions.push(activity)
    };
  });

  if (activityHash !== '') {
    //   console.log('activity hash has data')
    const table = meditationSessions.map((a) => {
      return (
        <tr key={a.id}>
          <td></td>
          <td>{a.minutes} minutes</td>
          <td>{a.notes}</td>
          <td><button onClick={(e) => askToDelete(e, a)}>Delete activity</button></td>
        </tr>
      );
    });
    return <RenderMedActivity table={table} />
  } else {
    //   console.log('activity hash is empty')
    return null;
  }
}
