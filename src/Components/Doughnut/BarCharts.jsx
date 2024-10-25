import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register components in Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  // Data for the bar chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        data: [10, 40, 20, 50, 25, 45, 30, 10, 30, 50, 25, 60],
        backgroundColor: '#6311CB',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        borderRadius: 8,
        width:"10px",
      },
    ],
  };

  // Options for the bar chart
  const options = {
    scales: {
      x: {
        barPercentage: 0.4, // Decrease this value to make bars narrower
        categoryPercentage: 0.6, // Adjust this to control the space between categories
      },
      y: {
        beginAtZero: true,
        ticks: {
          // Add 'k' to the labels
          callback: function (value) {
            return value + 'k';
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          // Customize the tooltip label
          label: function (context) {
            return context.raw + 'k';
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
