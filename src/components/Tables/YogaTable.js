import React from "react";

function YogaTable({ activityHash, askToDelete }) {
  const yogaSessions = [];

  if (activityHash.length) {
    activityHash.forEach((activity) => {
      if (activity.name === "yoga") {
        yogaSessions.push(activity);
      }
    });

    const table = yogaSessions.map((a) => {
      return (
        <tr key={a.id}>
          <td></td>
          <td>{a.yoga_type}</td>
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
          <td><b><em>Yoga Session</em></b></td>
          <td>Type of Yoga</td>
          <td>Time (minutes)</td>
          <td>Personal notes</td>
        {table}
      </tbody>
    </table>
  )
  } else {
    return null;
  }
}

export default YogaTable