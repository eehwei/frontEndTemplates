import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import LoginPage from './Login';
import LoginIcon from '@mui/icons-material/Login'; // Correct import
import { useLogin } from "../contexts/LoginContext"; 


export default function NoPage() {
  const navigate = useNavigate();
  const { isLoginOpen, openLogin, closeLogin } = useLogin();
  

  return (
    <>
      <Header />
      <h2>Error 404: Not Found</h2>

      {/* Navigation Buttons */}
      <button onClick={() => navigate('/about')}>Go to About Page</button>
      <button onClick={() => navigate('/home')}>Go to Home Page</button>
      <button onClick={() => navigate('/contact')}>Go to Contact Page</button>

        {/* Global Login Button */}
      <Button
        onClick={openLogin}
        startIcon={<LoginIcon />}
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 , position: 'absolute', // Makes the button positioned relative to the viewport
          top: 70, // Distance from the top of the screen
          right: 16, // Distance from the right of the screen
          zIndex: (theme) => theme.zIndex.appBar + 1, // Ensures it is not covered by the top bar
          }}
        
      >
        Login
      </Button>

          {/* Backdrop with Login Card */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoginOpen}
        onClick={closeLogin}
      >
        <div onClick={(e) => e.stopPropagation() /* Prevent closing when clicking inside */}>
          <LoginPage />
        </div>
      </Backdrop>
    </>
  );
}
