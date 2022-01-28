import React from "react"

export default function RenderYogaActivity({ table }) {
    return (
        <table className="records">
        <tbody>
            <td><b><em>Yoga Session</em></b></td>
            <td>Type of Yoga</td>
            <td>Time (minutes)</td>
            <td>Personal notes</td>
          {table}
        </tbody>
      </table>
    )
}