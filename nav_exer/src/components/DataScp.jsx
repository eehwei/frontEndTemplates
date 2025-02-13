
export const data1 = {
    labels: [1, 2, 3, 4 , 5, 6], // X-axis values (Screw Numbers)
    datasets: [
      {
        label: "Data Series",
        data: [2, 5, 30, 8, 6, 7], // Y-axis values (Fastening Torque)
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
  
 export const data2 = {
    labels: [2,4,6,8,10,12], // X-axis values (Screw Numbers)
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
        data: Array(6).fill(7), // Draws a horizontal line at y = 4
        borderColor: "black",
        borderWidth: 2,
        pointRadius: 0, // Hide points
      },
    ],
  };
  
  export const data3 = {
    labels: [1, 2, 3, 4, 5, 6], // X-axis values (Screw Numbers)
    datasets: [
      {
        label: "Data Series",
        data: [10,8,6,4,2,-2], // Y-axis values (Fastening Torque)
        borderColor: "#1976d2",
        tension: 0.4,
        fill: false, // No fill under the line
      },
      {
        label: "Upper control limit", // Upper control limit legend
        data: Array(8).fill(8), // Draws a horizontal line at y = 6
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
        data: Array(6).fill(5), // Draws a horizontal line at y = 4
        borderColor: "black",
        borderWidth: 2,
        pointRadius: 0, // Hide points
      },


    ],
  };
 

