import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function ApexLine() {
  const [chartOptions, setChartOptions] = useState({
    series: [{
      name: 'Rate',
      data: ["0","20k", "60k", "50k", "110k","90k", "100k"],
      gradientToColors: ['#004017'],
    }],
    options: {
      chart: {
        height: 500,
        type: 'line',
        toolbar: {
          show: false // Hide the action icons
        }
      },
      stroke: {
        width: 2,
        curve: 'smooth',
        colors: ['#598369'], // Customize the line color here
      },
      markers: {
        size: 6, // Size of markers
        colors: ['#004118'], // Marker (dot) color
        strokeColor: '#fff', // Stroke color of the marker
        strokeWidth: 2
      },
      xaxis: {
        type: 'category', // Change from 'datetime' to 'category'
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        tickAmount: 7
      },
      title: {
        text: 'Spend summary', // Adjust the title if needed
        align: 'left',
        style: {
          fontSize: '15px',
          color: '#000',
          fontWeight: 400
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#004017'],
          shadeIntensity: 4,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100] // Gradient stops
        },
      }
    }
  });

  return (
    <div>
      <ReactApexChart  options={chartOptions.options} series={chartOptions.series} type="line" height={"288px"} width={"100%"} />
    </div>
  );
}

export default ApexLine;
