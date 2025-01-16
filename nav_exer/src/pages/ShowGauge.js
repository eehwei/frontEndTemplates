import React from 'react';
import Gauge from '../components/Gauge';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import './ShowGauge.css';


function Bottom1(){
    return(
        <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between" // Ensure equal spacing between columns
        marginTop={2}
      >
        {/* Running Section */}
        <Box
          sx={{
            border: '3px solid #f2d75c', // Add border
            borderRadius: '20px', // Rounded corners
            padding: 1, // Inner padding
            flex: 1, // Equal column size
            marginRight: 1, // Spacing between columns
            boxShadow:2,
            color:'#f2d75c',
          }}
        >
          <Box>
            <Typography variant="body1" >Running</Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold" variant="h4" textAlign={"center"}>614</Typography>
          </Box>
        </Box>

        {/* Idle Section */}
        <Box
          sx={{
            border: '4px solid #f2d75c', // Add border
            borderRadius: '20px', // Rounded corners
            padding: 1, // Inner padding
            flex: 1, // Equal column size
            marginLeft: 1, // Spacing between columns
            boxShadow:2,
            color:'#f2d75c',
          }}
        >
          <Box>
            <Typography variant="body1" fontWeight="bold" >Idle</Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold" variant="h4" textAlign={"center"}>9</Typography>
          </Box>
        </Box>
      </Box>
    )
}

function Bottom2(){
    return(
        <Box marginTop={2} sx={{border:'3px solid #f2da3d',padding:1}}>
        <Box
        display="flex"
        flexDirection="row"
        //justifyContent="space-between" // Ensure equal spacing between columns
        marginTop={2}
        margin='auto'
        sx={{ flex: 1, borderRadius: '2px', }}
      >
        {/* Running Section */}
        <Box
          sx={{
            border: '3px solid #f2d75c', // Add border
            borderRight:'none',
            padding: 1, // Inner padding
            flex: 1, // Equal column size
            //marginRight: 1, // Spacing between columns
            boxShadow:2,
            color:'#f2d75c',
          }}
        >
          <Box>
            <Typography variant="body1" >Running</Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold" variant="h4" textAlign={"center"}>614</Typography>
          </Box>
        </Box>

        {/* Idle Section */}
        <Box
          sx={{
            border: '3px solid #f2d75c', // Add border
           
            padding: 1, // Inner padding
            flex: 1, // Equal column size
           // marginLeft: 1, // Spacing between columns
            boxShadow:2,
            color:'#f2d75c',
          }}
        >
          <Box>
            <Typography variant="body1" fontWeight="bold" >Idle</Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold" variant="h4" textAlign={"center"}>9</Typography>
          </Box>
        </Box>
      </Box>
      </Box>
    )
}


export default function ShowGauge() {
  return (
    <>
        <div className="black-page">
      <Card
        sx={{
          padding: 2,
          maxWidth: 300, // Adjust the maximum width of the card
          //margin: 'auto', // Center the card
          boxShadow: 3, // Add a subtle shadow
          backgroundColor:'black',
        }}
      >
        <Box sx={{alignContent:'center', color:'white'}}>
          <Gauge />
        </Box>

        {/*bottom*/}
        <Bottom1/>
      </Card>

      {/*card 2 */}
      <Card
        sx={{
          padding: 2,
          maxWidth: 300, // Adjust the maximum width of the card
          //margin: 'auto', // Center the card
          boxShadow: 3, // Add a subtle shadow
          backgroundColor:'black',
        }}
      >
        <Box sx={{alignContent:'center', color:'white'}}>
          <Gauge />
        </Box>

        {/*bottom*/}
        <Bottom2/>
      </Card>
        
      

      </div>
    </>
  );
}
