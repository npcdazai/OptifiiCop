import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const ApexChart = ({ data }) => {

  // Customize colors and series titles here
  const [options] = useState({
    chart: {
      width: 600,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          size: '45%' // Adjust the donut size here (percentage of chart size)
        }
      }
    },
    labels:data?.labels,
    dataLabels: {
      enabled: false
    },
    fill: {
      type: 'gradient',
    },
    colors: data?.backgroundColor,  
    legend: {
      show: false,
      position: 'right',
      labels: {
        colors: ['#000'], // Customize the color of the legend labels
        useSeriesColors: true
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 500
        },
        legend: {
          position: 'center'
        }
      }
    }]
  });

  return (
    <ApexCharts options={options} series={data?.values} type="donut" width={300} />
  );
};

export default ApexChart;
