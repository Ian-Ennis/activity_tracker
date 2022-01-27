import React from "react";
import RenderYogaActivity from "./RenderYogaActivity";

export default function PrepYogaTable({ activityHash }) {
//   console.log("hash:", activityHash)
//   console.log(typeof activityHash)
  const table = [];
  console.log({activityHash}, 'yoga table');
  const yogaSessions = [];

  activityHash?.forEach((activity) => {
    if (activity.name === "yoga") {
        yogaSessions.push(activity)
    };
  });
  console.log({yogaSessions})

  if (activityHash !== '') {
    //   console.log('activity hash has data')
    const table = activityHash.map((a) => {
      return (
        <tr key={a.id}>
          <td></td>
          <td>{a.yoga_type}</td>
          <td>{a.minutes} minutes</td>
          <td>{a.notes}</td>
        </tr>
      );
    });
    return <RenderYogaActivity table={table} />
  } else {
    //   console.log('activity hash is empty')
    return null;
  }
}
