// LineChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

// Register the necessary components
ChartJS.register( Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale );

// Sample options for the chart
// Sample options for the chart
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += `${context.parsed.y}`;
                    }
                    return label;
                }
            }
        }
    },
    animation: {
        tension: {
            duration: 2000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
        }
    }
};


const Utils = {
    numbers: ({ count, min, max }) => Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min),
    CHART_COLORS: {
        red: 'rgba(255, 99, 132, 1)',
        darkGreen: 'rgba(0, 65, 24, 1)'  // Added color related to #004118
    },
    transparentize: (color, opacity) => {
        // Use regex to replace the alpha value
        return color.replace(/(rgba\(\d+, \d+, \d+, )\d+(\))/, `$1${opacity}$2`);
    }
};


const LineChart = ({ width = 300, height = 250 }) => {
    const data = {
        labels: ['Bahrain', 'Kuwait', 'Oman', 'Qatar', 'Saudi Arabia', 'UAE', 'India'],
        datasets: [
            {
                label: 'Exchange rate',
                data: [45.9087, 23.8798, 99.9809, 65.8987, 65.8987, 34.9898, 32.8987],
                borderColor: Utils.CHART_COLORS.darkGreen,
                backgroundColor: Utils.transparentize(Utils.CHART_COLORS.darkGreen, 0.5),
                pointStyle: 'rectRounded',
                pointRadius: 10,
                pointHoverRadius: 15
            }
        ]
    };



    return (
        <Line data={data} options={options} />
    );
};

export default LineChart;
