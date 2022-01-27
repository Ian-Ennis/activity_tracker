import React from "react";

export default function Main({ header, handleActivitySubmit }) {

  function handleActivitySubmit() {

  }

  return (
    <div>
      <div className="header">{header}</div>
      <div className="site_info">
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
      </form>
    </div>
  );
}
