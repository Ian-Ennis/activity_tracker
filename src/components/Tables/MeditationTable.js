import React from "react";

function MeditationTable({ activityHash, askToDelete }) {
  const meditationSessions = [];

  if (activityHash.length) {
    activityHash.forEach((activity) => {
      if (activity.name === "meditation") {
        meditationSessions.push(activity);
      }
    });

    const table = meditationSessions.map((a) => {
      return (
        <tr key={a.id}>
          <td>{a.date}</td>
          <td>{a.minutes} minutes</td>
          <td>{a.notes}</td>
          <td>
            <button onClick={(e) => askToDelete(e, a)}>Delete activity</button>
          </td>
        </tr>
      );
    });
    
    return (
      <table className="records">
      <tbody>
          <td><b><em>Meditation Session</em></b></td>
          <td>Length of activity</td>
          <td>Personal notes</td>
        {table}
      </tbody>
    </table>
  )
  } else {
    return null;
  }
}

export default MeditationTable