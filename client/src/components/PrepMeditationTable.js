import React from "react";
import RenderMedActivity from "./RenderMedActivity";

export default function PrepMeditationTable({ activityHash }) {
//   console.log("hash:", activityHash)
//   console.log(typeof activityHash)
  const table = []

  if (activityHash !== '') {
    //   console.log('activity hash has data')
    const table = activityHash.map((a) => {
      return (
        <tr key={a.id}>
          <td></td>
          <td>{a.minutes} minutes</td>
          <td>{a.notes}</td>
        </tr>
      );
    });
    return <RenderMedActivity table={table} />
  } else {
    //   console.log('activity hash is empty')
    return null;
  }
}
