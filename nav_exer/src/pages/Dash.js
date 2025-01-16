import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { MenuItem } from '@mui/material';
import MenuList from '@mui/material/MenuList'; 
import DashboardIcon from '@mui/icons-material/Dashboard';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import imagePath from '../Avatar/girl.png';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button'; 

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useState } from "react";
import BarChart1 from "../components/BarChart1";
import TimePicker from '../components/TimePicker';
import DonutChart from '../components/Donut';
import { useNavigate } from 'react-router-dom';

function Donut1() {
  return (
    <Card>
      <DonutChart />
    </Card>
  );
}



function Bar1(){
  return(
    <Card sx={{backgroundColor:'white',mt:2}}>
        <BarChart1/>
    </Card>
  )
}





function Teacher() {
    const [showAll, setShowAll] = useState(false);
  
    const teacherList = [
      { name: "Ms Jenny", subject: "English", color: "pink", avatar: "engtc" },
      { name: "Ms Kim", subject: "Chemistry", color: "green", avatar: "chemtc" },
      { name: "Mr John", subject: "Maths", color: "blue", avatar: "mathtc" },
      { name: "Ms Sarah", subject: "Biology", color: "purple", avatar: "biotc" },
      { name: "Mr Smith", subject: "Physics", color: "orange", avatar: "phytc" },
    ];
  
    // Determine how many teachers to show based on state
    const visibleTeachers = showAll ? teacherList : teacherList.slice(0, 3);
  
    return (
      <>
  
  
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p:2,m:1
          }}
        >
          <Typography fontWeight="bold" display="flex" variant="h6" align="left" gutterBottom>
          Teachers
        </Typography>
          {visibleTeachers.map((teacher, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="row"
              alignItems="center"
              sx={{
                gap: 2,
                width: "100%",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Avatar alt={teacher.name} src={teacher.avatar} />
              <Box>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {teacher.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {teacher.subject}
                </Typography>
              </Box>
              <MailOutlineIcon sx={{ color: teacher.color }} />
            </Box>
          ))}
  
          {/* Show All / Show Less Button */}
          {teacherList.length > 3 && (
            <Button
              variant="contained"
              onClick={() => setShowAll(!showAll)}
              sx={{ mt: 2 }}
            >
              {showAll ? "Show Less" : "Show All"}
            </Button>
          )}
        </Card>
      </>
    );
  }


// Search component styling
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%', // This makes the search bar take up all available space
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}> {/* Aligns the search bar to the right */}
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
      </Search>
    </Box>
  );
}

function Menu() {
  const navigate=useNavigate();
  return (
    <MenuList display="flex" flexDirection="column" sx={{ height: '100%' }}>
      <MenuItem>
        <CalendarMonthIcon sx={{ mr: 1 }} /> <Typography>My schedule</Typography>
      </MenuItem>
      <MenuItem>
        <DashboardIcon sx={{ mr: 1 }} />
        <Typography>Dashboard</Typography>
      </MenuItem>
      <MenuItem>
        <ChatBubbleOutlineIcon sx={{ mr: 1 }} />
        <Typography>Message</Typography>
      </MenuItem>
      <MenuItem>
        <ViewInArIcon sx={{ mr: 1 }} />
        <Typography>Project</Typography>
      </MenuItem>
      <MenuItem>
      <button display="flex" flewDirection="row" onClick={()=>navigate('/grades')} >
        <MilitaryTechIcon sx={{ mr: 1 }} />
        <Typography>Grades</Typography>
      </button>
      </MenuItem>

      <Box sx={{ my: 2 }}>
        <hr style={{ border: '1px solid grey' }} />
      </Box>

      <MenuItem>
        <SettingsApplicationsIcon sx={{ mr: 1 }} />
        <Typography>Settings</Typography>
      </MenuItem>
      <MenuItem>
        <LogoutIcon sx={{ mr: 1 }} />
        <Typography>Log out</Typography>
      </MenuItem>

      {/* This will push the "Support" item to the bottom */}
      <Box sx={{ marginTop: 'auto' }}>
        <MenuItem>
          <HelpOutlineIcon sx={{ mr: 1 }} />
          <Typography>Support</Typography>
        </MenuItem>
      </Box>
    </MenuList>
  );
}

function RegisterCard() {
    return (
      <Card sx={{ position: 'relative', width: '100%', height: 150 }}> {/* Set the card size */}
        {/* CardMedia for image */}
        <CardMedia
          sx={{
            height: '100%', // Cover the full card height
            width: '100%',  // Cover the full card width
            backgroundSize: 'cover', // Make sure the image covers the card area
            backgroundImage: `url(${require('../asset/study.jpg')})`, // Path to your image
            backgroundPosition: 'center', // Center the image
          }}
          title="Register to learn"
        />
  
        {/* Register button */}
        <CardActions sx={{ 
          position: 'absolute', 
          bottom: 10, // Position the button at the bottom of the image
          left: '50%', // Center the button horizontally
          transform: 'translateX(-50%)', // Adjust for perfect centering
          left:60,
          zIndex: 1
        }}>
          <Button size="small" sx={{ backgroundColor: 'orange',color:'black' }}>Register</Button>
        </CardActions>
      </Card>
    );
  }
  

export default function Dash() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 2,
        height: '100vh', // Ensures full height
      }}
    >
      {/* Menu Section */}
      <Box
        gridColumn="span 2"
        display="flex"
        flexDirection="column"
        sx={{ backgroundColor: '#f5f5f5', p: 2 }}
      >
        <Typography variant="h4">Robotech</Typography>
        <Menu />
      </Box>

      {/* Right Section */}
      <Box gridColumn="span 10" sx={{ backgroundColor: '#e0e0e0', p: 2 }}>
            <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Hello, Anna!</Typography>
            <SearchAppBar />
            <Box display="flex" direction="row" sx={{ alignItems:"center",marginLeft:1,mr:1}}>
        <Avatar alt="Elly" src={imagePath}/>
        <Typography>Elly</Typography>
        </Box>
            </Box>
            
            <Box><Typography>Have a good day!</Typography></Box>

            <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)', // 12 columns grid
            gap: 2,
            mt: 2, // Adds space between the "Have a good day!" text and the next section
          }}
        >
            <Box id="left" gridColumn={"span 6"}>
                <RegisterCard/>
                <Bar1/>
                
            </Box>
            <Box id="mid" gridColumn={"span 3"}>
                <Teacher/>
            </Box>
            <Box id="right" gridColumn={"span 3"}>
               
            <TimePicker/>
            <Donut1/>
            </Box>
            </Box>
      </Box>
      
    </Box>
  );
}
