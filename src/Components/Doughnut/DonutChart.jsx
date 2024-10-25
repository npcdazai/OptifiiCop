// DonutChart.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const DonutChart = ({ data, width = 300, height = 250 }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'My Dataset',
        data: data.values,
        backgroundColor: [ '#3182ce', '#004118', '#D69E2E', '#E53E3E' ],
        borderColor: ['#FFF'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return <Doughnut data={chartData} options={options} width={'100%'}  />;
};

export default DonutChart;
