import React from "react";

function MeditationTable({ askToDelete, meditationSessions }) {
  if (meditationSessions.length) {
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
      <>
        <table className="records">
          <tbody>
            <td>
              <b>
                <em>Meditation Session</em>
              </b>
            </td>
            <td>Time dedicated</td>
            <td>Personal notes</td>
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

export default MeditationTable;
