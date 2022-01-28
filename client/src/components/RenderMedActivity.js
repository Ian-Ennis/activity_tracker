import React from "react"

export default function RenderMedActivity({ table }) {
    return (
        <table className="records">
        <tbody>
            <td><b><em>Meditation Session</em></b></td>
            <td>Length of activity</td>
            <td>Personal notes</td>
          {table}
        </tbody>
      </table>
    )
}