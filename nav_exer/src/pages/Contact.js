import Header from '../components/Header';
import { useNavigate } from 'react-router-dom'; // Correct Hook for React Router
import { Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import imagePath from '../Avatar/girl.png';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

 function LetterAvatars() {
  const navigate=useNavigate();
  return (
    <Stack direction="column" spacing={2}>
      <Box display="flex" direction="row"sx={{gap:2}}>
        <Avatar>H</Avatar>
        <Typography>Hannah</Typography>
        </Box>

      <Box display="flex" direction="row" sx={{gap:2}}>
        <Avatar  sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Typography >Nana</Typography>
      </Box>

      <button display="flex" direction="row" sx={{gap:2, alignItems:"center"}}
      onClick={() => navigate('/dash')}>
      <Avatar alt="Elly" src={imagePath} sx={{ width: 100, height: 100 }}/>
      <Typography>Elly</Typography>
      </button>
    </Stack>
  );
}


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// FullWidthGrid component
export function FullWidthGrid() {
  const navigate = useNavigate(); 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid item s={4}md={8}>
        <button onClick={() => navigate('/about')}>Go to About Page</button>
        </Grid>
        <Grid item s={4} md={4}>
        <button onClick={() => navigate('/home')}>Go to Home Page</button>
        </Grid>
        <Grid item s={4} md={4}>
        <button onClick={() => navigate('/noPage')}>Go to Error Page</button>
        </Grid>
        
      </Grid>
    </Box>
  );
}

// Contact component
export default function Contact(){
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <>
      <Header />
      <h2>Contact Page</h2>
     
      <FullWidthGrid/><br/>
      <LetterAvatars/>
    </>
   
  );
}
