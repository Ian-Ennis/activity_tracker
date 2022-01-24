import React from "react";

export default function NewActivityForm({ handleNewActivitySubmit }) {
  return (
    <div class="new_activity_form">
      <h3>New Activity</h3>
      <form onSubmit={(e) => handleNewActivitySubmit(e)}>
        <input type="text" name="time" placeholder="Name of activity" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
