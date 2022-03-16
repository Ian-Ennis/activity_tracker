import React from "react";
import { Bar } from "react-chartjs-2";

function CardioChart({ cardioLabels, cardioTime}) {
  return (
    <div className="bar_chart">
      <Bar
        data={{
          labels: cardioLabels,
          datasets: [
            {
              label: "Time dedicated",
              backgroundColor: "rgba(21, 232, 237, 1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: cardioTime,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Cardio Sessions",
              font: {
                size: 20
              }
            },
            legend: {
              display: false,
           }
          }
        }}
      />
    </div>
  );
}

export default CardioChart;
