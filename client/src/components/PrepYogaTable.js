import React from "react";
import RenderYogaActivity from "./RenderYogaActivity";

export default function PrepYogaTable({ activityHash, askToDelete }) {

  const table = [];
  const yogaSessions = [];

  activityHash?.forEach((activity) => {
    if (activity.name === "yoga") {
        yogaSessions.push(activity)
    };
  });

  if (activityHash !== '') {
    //   console.log('activity hash has data')
    const table = yogaSessions.map((a) => {
      return (
        <tr key={a.id}>
          <td></td>
          <td>{a.yoga_type}</td>
          <td>{a.minutes} minutes</td>
          <td>{a.notes}</td>
          <td><button onClick={(e) => askToDelete(e, a)}>Delete activity</button></td>
        </tr>
      );
    });
    return <RenderYogaActivity table={table} />
  } else {
    //   console.log('activity hash is empty')
    return null;
  }
}
