import Header from '../components/Header';
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';

function BasicGauges() {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <Gauge width={100} height={100} value={60} />
      <Gauge width={100} height={100} value={60} startAngle={-90} endAngle={90} />
    </Stack>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: 'green', // Optional background for better visuals
}));

export default function Pg1() {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)', // Divide into 12 columns
          gap: 2, // Optional gap between the items
        }}
      >
        {/* Row 1 */}
        <Box gridColumn="span 4">
          <Box
            gridRow="span 3 "
            sx={{
              display: 'flex',
              gap: 2,
              backgroundColor: 'pink',
              flexDirection: 'column',
              
            }}
          >
            {/* Header Box */}
            <Box
              display="flex"
              m="0"
              p="0 0 "
              sx={{ backgroundColor: '#007FFF', p: 5, color: 'white' }}
            >
              <Typography variant="h4">Header Section</Typography>
            </Box>

            {/* Lower Box (Typography Box) */}
            <Box sx={{ backgroundColor: '#f5f5f5', p: 2 }}>
              <Typography variant="body1">leftdsfhghjkufditfuol;r6ditul</Typography>
            </Box>
          </Box>
        </Box>

        {/* Row 2 */}
        <Box gridColumn="span 8">
          <Box
            gridColumn="span 8"
            gridRow="span 1 "
          >
            <Box
              display="flex"
              m="0 0"
              p="0 0 "
              sx={{ backgroundColor: '#007FFF', p: 2, color: '#fff' }}
            >
              <Typography variant="h4">Header Section</Typography>
            </Box>

            {/* Lower Box (Typography Box) */}
            <Box sx={{ backgroundColor: '#f5f5f5', p: 2 }}>
              <Typography variant="body1">
                This is the lower section where you can place additional content. You can
                use Typography for text or other components.
              </Typography>
            </Box>
          </Box>

          <Box
            gridColumn="span 8"
            gridRow="span 5"
            sx={{
              backgroundColor: 'black',
              color: 'red',
              flexDirection: 'column',
              m: '3',
            }}
          >
            <Box display="flex" p="4" sx={{ backgroundColor: 'darkblue',textAlign: 'center',justifyContent:'center' }}>
              <Typography variant="h4" >Header</Typography>
            </Box>
            <Box m="6" sx={{ bgcolor: 'green' }}>
              <Typography variant="body2">
                This is the lower section where you can place additional content. You can use Typography for text or other components.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box gridColumn="span 12" sx={{ textAlign: 'center', m: 4 }}>
          <Typography variant="h1">bello</Typography>
        </Box>

        {/* Gauge Section */}
        {/*<Box gridColumn="span 6" sx={{ backgroundColor: 'gray' }}>
          <Typography variant="h5">Gauge Placeholder</Typography>
          <BasicGauges/>
        </Box>*/}


        <Box>
          <Typography variant="h1">bello</Typography>
        </Box>
      </Box>
    </>
  );
}
