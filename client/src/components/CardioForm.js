import React from "react";

export default function CardioForm({ handleCardioSubmit }) {
  return (
    <div class="cardio_form">
      <h3>Cardio Activity</h3>
      <form onSubmit={(e) => handleCardioSubmit(e)}>
        <input type="text" name="type" placeholder="Walking/ Running/ Hiking" />
        <input type="float" name="distance" placeholder="Distance (miles)" />
        <input type="text" name="time" placeholder="Time (minutes)"/>
        <input type="date" name="date" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
