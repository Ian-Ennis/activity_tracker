import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
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
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}

export default CardioChart;
