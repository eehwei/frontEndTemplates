import React from 'react';
import Chart from 'react-apexcharts';

const DonutChart = () => {
  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon'], // Categories
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  const series = [44, 55, 41, 17, 15]; // Data points

  return (
    <div>
      <h1>Donut Chart</h1>
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

export default DonutChart;
