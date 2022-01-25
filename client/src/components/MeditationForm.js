import React from "react";

export default function MeditationForm({
  handleMeditationSubmit,
  seeProgress,
}) {
  return (
    <div class="meditation_div">
      <h3>Meditation Session</h3>
      <form onSubmit={(e) => handleMeditationSubmit(e)}>
        <input type="text" name="time" placeholder="Time (minutes)" />
        <input type="date" name="date" />
        <button type="submit">Submit</button>
        <button onClick={() => seeProgress}>See my progress!</button>
      </form>
    </div>
  );
}
