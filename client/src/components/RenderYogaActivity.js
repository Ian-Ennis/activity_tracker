import React from "react"

export default function RenderYogaActivity({ table }) {
    return (
        <table className="records">
        <tbody>
            <td><em>Yoga Session</em></td>
            <td>Type of Yoga</td>
            <td>Length of activity</td>
            <td>Personal notes</td>
          {table}
        </tbody>
      </table>
    )
}