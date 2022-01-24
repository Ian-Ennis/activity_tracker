import React from "react";

export default function NewActivityForm({ handleNewActivitySubmit }) {
  return (
    <div class="new_activity_form">
      <form onSubmit={(e) => handleNewActivitySubmit(e)}>
        <input type="text" name="time" placeholder="Name of activity" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
