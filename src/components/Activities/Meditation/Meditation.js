import MeditationChart from "./MeditationChart";
import MeditationTable from "./MeditationTable";

function Meditation({ currentUser, activity, activityHash, setActivityHash, askToDelete }) {
  const backend_API = `http://localhost:3000/activities`;

  const meditationSessions = [];
  const meditationLabels = [];
  const meditationTime = [];

  if (activityHash) {
    for (let i = 0; i < activityHash.length; i++) {
      if (activityHash[i].name === "meditation") {
        meditationLabels.push(activityHash[i].date);
        meditationSessions.push(activityHash[i]);
        meditationTime.push(activityHash[i].minutes);
      }
    }
  }

  function handleMeditationSubmit(e) {
    e.preventDefault();

    const user_id = currentUser.id;
    const date = e.target.date.value;
    const name = activity;
    const minutes = e.target.minutes.value;
    const notes = e.target.notes.value;

    fetch(`${backend_API}`, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        user_id,
        name,
        date,
        minutes,
        notes,
      }),
    }).then(() => {
      fetch(`${backend_API}`, {
        method: "GET",
        headers: {
          Accepts: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setActivityHash(data);
        });
    });
  }

  return (
    <>
      <form className="form" onSubmit={handleMeditationSubmit}>
        <label htmlFor="name">Meditation Session:</label>
        <div className="inputs">
          <input type="text" name="date" placeholder="MM/DD/YYYY" />
          <input type="number" name="minutes" placeholder="Time (minutes)" />
          <input type="text" name="notes" placeholder="Notes?" />
          <button type="submit">Submit</button>
        </div>
      </form>
      {meditationSessions.length ? (
        <MeditationChart
          meditationLabels={meditationLabels}
          meditationTime={meditationTime}
        />
      ) : null}
      <MeditationTable
        meditationSessions={meditationSessions}
        askToDelete={askToDelete}
      />
    </>
  );
}

export default Meditation;
