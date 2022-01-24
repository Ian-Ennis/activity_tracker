import React from "react";

export default function YogaForm({ handleYogaSubmit}) {
  return (
    <div class="yoga_form">
      <h3>Yoga Session</h3>
      <form onSubmit={(e) => handleYogaSubmit(e)}>
        <input type="text" name="type" placeholder="Type of yoga" />
        <input type="text" name="time" placeholder="Time (minutes)"/>
        <input type="date" name="date" placeholder="Date you practiced" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
