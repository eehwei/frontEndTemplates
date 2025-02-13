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

const color =""

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
        title: () => "",
        label: (tooltipItem) => [
          `Screw No.: ${tooltipItem.label}`,
          `Fastening Torque: ${tooltipItem.raw}`,
        ],
      },
    },
    annotation: {
      annotations: [
        {
          type: "box",
          yMin: -Infinity,
          yMax: 2,
          backgroundColor: color,
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

export default function ShadedLineChart({ data, color }) {
  return <Line data={data} options={options} color ={color}/>;
}
