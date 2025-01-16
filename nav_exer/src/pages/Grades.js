import * as React from 'react';
import ShadedLineChart from '../components/ShadedLineChart';
import Box from '@mui/material/Box';

export default function Grades() {
  return (
    <>
      <Box display="flex" direction="row" gap={3}>
        <Box
          sx={{
            width: 400, // Set explicit width
            height: 300, // Set explicit height
            margin: "auto", // Center the chart
            backgroundColor: "#f5f5f5", // Optional background
            padding: 2, // Add padding
            borderRadius: 2, // Add rounded corners
            boxShadow: 3, // Add subtle shadow
          }}
        >
          <ShadedLineChart />
        </Box>

        {/* Box 2 */}
        <Box
          sx={{
            width: 400, // Set explicit width
            height: 300, // Set explicit height
            margin: "auto", // Center the chart
            backgroundColor: "#f5f5f5", // Optional background
            padding: 2, // Add padding
            borderRadius: 2, // Add rounded corners
            boxShadow: 3, // Add subtle shadow
          }}
        >
          <ShadedLineChart />
        </Box>
      </Box>
    </>
  );
}
