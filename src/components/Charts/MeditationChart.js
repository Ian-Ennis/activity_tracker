import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

function MeditationChart({ meditationLabels, meditationTime }) {
  return (
    <div className="bar_chart">
      <Bar
        data={{
          labels: meditationLabels,
          datasets: [
            {
              label: "Time dedicated",
              backgroundColor: "rgba(21, 232, 237, 1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: meditationTime,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Meditation Sessions",
              font: {
                size: 20,
              },
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default MeditationChart;
