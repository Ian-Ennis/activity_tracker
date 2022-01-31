import React from "react";
import RenderMedActivity from "./RenderMedActivity";

export default function PrepMeditationTable({ activityHash, askToDelete }) {
  const meditationSessions = [];

  if (activityHash.length) {
    activityHash.forEach((activity) => {
      if (activity.name === "meditation") {
        meditationSessions.push(activity);
      }
    });

    const table = meditationSessions.map((a) => {
      return (
        <tr key={a.id}
          <td></td>
          <td>{a.minutes} minutes</td>
          <td>{a.notes}</td>
          <td>
            <button onClick={(e) => askToDelete(e, a)}>Delete activity</button>
          </td>
        </tr>
      );
    });
    return <RenderMedActivity table={table} />;
  } else {
    return null;
  }
}
