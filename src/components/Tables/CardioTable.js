import React from "react";

function CardioTable({ activityHash, askToDelete }) {
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
    
    return (
      <table className="records">
      <tbody>
          <td><b><em>Cardio workout</em></b></td>
          <td>Type of workout</td>
          <td>Distance (miles)</td>
          <td>Time (minutes)</td>
        {table}
      </tbody>
    </table>
    )
  } else {
    return null;
  }
}

export default CardioTable
