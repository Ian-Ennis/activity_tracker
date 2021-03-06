import React from "react";

function CardioTable({ cardioSessions, askToDelete }) {
  if (cardioSessions.length) {
    const table = cardioSessions.map((a) => {
      return (
        <tr key={a.id}>
          <td>{a.date}</td>
          <td>{a.workout}</td>
          <td>{a.distance}</td>
          <td>{a.minutes}</td>
          <td>{a.notes}</td>
          <td>
            <button onClick={(e) => askToDelete(e, a)}>Delete activity</button>
          </td>
        </tr>
      );
    });

    return (
      <>
        <table className="records">
          <tbody>
            <td>
              <b>
                <em>Cardio workout</em>
              </b>
            </td>
            <td>Type of workout</td>
            <td>Distance (miles)</td>
            <td>Time dedicated</td>
            <td>Notes</td>
            <td></td>
            {table}
          </tbody>
        </table>
        <p id="more_resources">
          <em>
            <b>
              Looking for some reading on these types of self-care sessions?
              Checkout the resources section on the top menu.{" "}
            </b>
          </em>
        </p>
      </>
    );
  } else {
    return null;
  }
}

export default CardioTable;
