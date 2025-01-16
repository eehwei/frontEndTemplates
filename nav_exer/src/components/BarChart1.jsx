import React from 'react';
import ApexCharts from 'apexcharts';

const BarChart1 = () => {
  const options = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    series: [
      {
        data: [
          { x: 'Category A', y: 10 },
          { x: 'Category B', y: 18 },
          { x: 'Category C', y: 13 },
        ],
      },
    ],
    xaxis: {
      categories: ['Category A', 'Category B', 'Category C'], // Defines x-axis categories
    },
  };

  React.useEffect(() => {
    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    // Clean up on unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart"></div>;
};

export default BarChart1;
