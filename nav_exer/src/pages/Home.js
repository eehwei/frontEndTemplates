import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'; // Import the Button component
import Header from '../components/Header';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BoxSx from '../components/BoxSx';
import RecipeReviewCard from '../components/Shrimp';

// Styled Grid Item
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'red',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...(theme.palette.mode === 'dark' && {
    backgroundColor: '#1A2027',
  }),
}));

// Grid Component
function RowAndColumnSpacing() {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ width: '100%', marginTop: 3 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
        <Button
          variant="contained"
          onClick={() => navigate('/about')}
          style={{ margin: '5px' }}
        >
          Go to About Page
        </Button>
        </Grid>
        <Grid item xs={4}>
        <Button
          variant="contained"
          onClick={() => navigate('/contact')}
          style={{ margin: '5px' }}
        >
          Go to Contact Page
        </Button>
        </Grid>
        <Grid item xs={4}>
        <Button
          variant="contained"
          onClick={() => navigate('/noPage')}
          style={{ margin: '5px' }}
        >
          Go to Error Page
        </Button>
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <h2>Home Page</h2>
      <div>
        <p>Welcome to the Home Screen</p>
       <Box display="flex" justifyContent={'space-evenly'}> 
       <BoxSx />
       <RecipeReviewCard/>
       </Box>
      </div>
      {/* Use the Grid Component */}
      <RowAndColumnSpacing />
     
    </div>  
  );
}
