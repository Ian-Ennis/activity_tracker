import CardioChart from "./CardioChart";
import CardioTable from "./CardioTable";

function Cardio({
  currentUser,
  activity,
  activityHash,
  setActivityHash,
  askToDelete,
}) {
  const backend_API = `http://localhost:3000/activities`;

  const cardioSessions = [];
  const cardioLabels = [];
  const cardioTime = [];

  if (activityHash) {
    for (let i = 0; i < activityHash.length; i++) {
      if (activityHash[i].name === "cardio") {
        cardioLabels.push(activityHash[i].date);
        cardioSessions.push(activityHash[i]);
        cardioTime.push(activityHash[i].minutes);
      }
    }
  }

  function handleCardioSubmit(e) {
    e.preventDefault();
    setActivityHash([]);

    const user_id = currentUser.id;
    const date = e.target.date.value;
    const name = activity;
    const workout = e.target.workout.value;
    const distance = e.target.distance.value;
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
        workout,
        distance,
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
      <form className="form" onSubmit={handleCardioSubmit}>
        <label htmlFor="name">Cardio workout:</label>
        <div className="inputs">
          <input type="text" name="date" placeholder="MM/DD/YYYY" />
          <input
            type="text"
            name="workout"
            placeholder="Type (walk/run/hike)"
          />
          <input type="number" name="distance" placeholder="Distance (miles)" />
          <input type="number" name="minutes" placeholder="Time (minutes)" />
          <input type="text" name="notes" placeholder="Notes?" />
          <button type="submit">Submit</button>
        </div>
      </form>
      {cardioSessions.length ? (
        <CardioChart cardioLabels={cardioLabels} cardioTime={cardioTime} />
      ) : null}
      <CardioTable cardioSessions={cardioSessions} askToDelete={askToDelete} />
    </>
  );
}

export default Cardio