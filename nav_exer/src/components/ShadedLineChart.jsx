import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip,
  Legend,
  annotationPlugin
);

const data = {
  labels: [1, 2, 3, 4, 5, 6], // X-axis values (Screw Numbers)
  datasets: [
    {
      label: "Data Series",
      data: [2, 5, 3, 8, 6, 7], // Y-axis values (Fastening Torque)
      borderColor: "#1976d2",
      tension: 0.4,
      fill: false, // No fill under the line
    },
    {
      label: "Upper control limit", // Upper control limit legend
      data: Array(6).fill(6), // Draws a horizontal line at y = 6
      borderColor: "yellow",
      borderDash: [5, 5], // Dashed line
      borderWidth: 2,
      pointRadius: 0, // Hide points
    },
    {
      label: "Lower control limit", // Lower control limit legend
      data: Array(6).fill(2), // Draws a horizontal line at y = 2
      borderColor: "red",
      borderDash: [5, 5], // Dashed line
      borderWidth: 2,
      pointRadius: 0, // Hide points
    },
    {
      label: "Torque Set", // Torque Set legend
      data: Array(6).fill(4), // Draws a horizontal line at y = 4
      borderColor: "black",
      borderWidth: 2,
      pointRadius: 0, // Hide points
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
      },
    },
    tooltip: {
      callbacks: {
        title: function () {
          // Return an empty string to remove the default title
          return '';
        },
        label: function (tooltipItem) {
          const screwNo = tooltipItem.label; // X-axis value
          const fasteningTorque = tooltipItem.raw; // Y-axis value
          return [
            `Screw No.: ${screwNo}`, // Custom first row
            `Fastening Torque: ${fasteningTorque}`, // Custom second row
          ];
        },
      },
    },
    annotation: {
      annotations: [
        {
          type: "box",
          yMin: -Infinity,
          yMax: 2,
          backgroundColor: "rgba(255, 0, 0, 0.3)",
        },
        {
          type: "box",
          yMin: 6,
          yMax: Infinity,
          backgroundColor: "rgba(237, 241, 28, 0.3)",
        },
      ],
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Fastening Torque (Lbf_in)",
        font: {
          size: 14,
        },
      },
    },
    x: {
      title: {
        display: true,
        text: "Step/Screw No.",
        font: {
          size: 14,
        },
      },
    },
  },
};


export default function ShadedLineChart() {
  return <Line data={data} options={options} />;
}
