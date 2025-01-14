import React from 'react';
import Header from '../components/Header';  // Assuming Header is correctly imported
import { useNavigate } from 'react-router-dom';  // Correct Hook for React Router
import { Button } from '@mui/material';  // Material UI Button
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import BoxSx from '../components/BoxSx'


export default function About() {
  const navigate = useNavigate();  // Hook to navigate programmatically

  return (
    <Box>
      <Header />
      <h2>About Page</h2>

      <BoxSx />

      {/* Navigation buttons using Material UI's Button */}
      <Box display="flex" sx={{ marginTop: '20px',  justifyContent:"space-evenly" }} >
        <Box><Button variant="contained" onClick={() => navigate('/contact')} style={{ margin: '10px' }}>
          Go to Contact Page
        </Button></Box>
        <Box><Button variant="contained" onClick={() => navigate('/home')} style={{ margin: '10px' }}>
          Go to Home Page
        </Button></Box>
        <Box><Button variant="contained" onClick={() => navigate('/noPage')} style={{ margin: '10px' }}>
          Go to Error Page
        </Button></Box>
      </Box>
    </Box>
  );
}
