import React from "react";

export default function MeditationForm({ handleMeditationSubmit }) {
  return (
     <div class="meditation_form">
          <form onSubmit={(e) => handleMeditationSubmit(e)}>
          <input type="text" name="time" placeholder="Time (minutes)"/>
          <input type="date" name="date" />
          <button type="submit">Submit</button>
         </form>
    </div>
  )
}
