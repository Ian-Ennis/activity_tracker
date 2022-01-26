import React from "react";

export default function Main({ handleActivitySubmit }) {
  return (
    <div>
      <div class="header">{header}</div>
      <div class="site_info">
        <p>
          Down to meditate? Into yoga? Always on the move? Log your self-care
          sessions using the menu below, and keep track of your kick-ass
          routines as you practice.
        </p>
      </div>
      <form onSubmit={(e) => handleActivitySubmit(e)}>
        <input type="text" name="name" placeholder="Name of activity" />
        <input type="number" name="length" placeholder="Time (minutes)" />
        <button type="submit">Submit</button>
        <button onClick={() => seeProgress}>See my progress!</button>
      </form>
    </div>
  );
}
