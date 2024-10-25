import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'; // Import necessary components
import { Box, Text } from '@chakra-ui/react';

function PieCharts() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Register required components
    Chart.register(ArcElement, Tooltip, Legend);

    const ctx = chartRef.current.getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Food', 'Fuel', 'Travel', 'Sales call'],
        datasets: [
          {
            data: [25, 15, 30, 30], // Adjust the values as needed
            backgroundColor: ['#ff6384', '#ffce56', '#36a2eb', '#4bc0c0'],
            borderColor: ['#fff', '#fff', '#fff', '#fff'],
            borderWidth: 1,
            borderRadius:0,
          },
        ],
      },
      options: {
        cutout: '75%', 
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            borderRadius:"0px",
            labels: {
              usePointStyle: true,
              usePointStyle: false, // Disables the point style
              boxWidth: 25, // Adjust this to make square boxes
              padding: 15,
              paddingTop:70,
            },
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <Text fontSize={"sm"} fontWeight={500} mb={5}>Total spent by category</Text>
      <Box position={"relative"}>
        <canvas ref={chartRef} style={{width:"260px"}} />
        <Box position={"absolute"} top={"36%"} left={"36%"}>
            <Text fontSize={"sm"} mb={0}>Total Value</Text>
            <Text fontSize={"md"} mb={0} fontWeight={500}>₹9,999.99</Text>
        </Box>
      </Box>
    </div>
  );
}

export default PieCharts;
