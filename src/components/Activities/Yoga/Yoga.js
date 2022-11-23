import YogaChart from "./YogaChart";
import YogaTable from "./YogaTable";

function Yoga({ currentUser, activity, activityHash, setActivityHash, askToDelete }) {
  const backend_API = `http://localhost:3000/activities`;

  const yogaSessions = [];
  const yogaLabels = [];
  const yogaTime = [];

  if (activityHash) {
    for (let i = 0; i < activityHash.length; i++) {
      if (activityHash[i].name === "yoga") {
        yogaLabels.push(activityHash[i].date);
        yogaSessions.push(activityHash[i]);
        yogaTime.push(activityHash[i].minutes);
      }
    }
  }

  function handleYogaSubmit(e) {
    e.preventDefault();
    setActivityHash([]);

    const user_id = currentUser.id;
    const date = e.target.date.value;
    const name = activity;
    const yoga_type = e.target.yoga_type.value;
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
        yoga_type,
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
      <form className="form" onSubmit={handleYogaSubmit}>
        <label htmlFor="name">Yoga Session:</label>
        <div className="inputs">
          <input type="text" name="date" placeholder="MM/DD/YYYY" />
          <input type="text" name="yoga_type" placeholder="Type (Hatha, etc)" />
          <input type="number" name="minutes" placeholder="Time (minutes)" />
          <input type="text" name="notes" placeholder="Notes?" />
          <button type="submit">Submit</button>
        </div>
      </form>
      {yogaSessions.length ? (
        <YogaChart yogaLabels={yogaLabels} yogaTime={yogaTime} />
      ) : null}
      <YogaTable yogaSessions={yogaSessions} askToDelete={askToDelete} />
    </>
  );
}

export default Yoga;
