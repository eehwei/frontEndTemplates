import React, { useState } from "react";
import { Box, Card, Tab, Tabs, TextField, Button, Typography,  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { authenticateUser, registerUser } from "../components/Authentication";


export default function LoginPage({ setIsAuthenticated, setUser }) {
  const [activeTab, setActiveTab] = useState(0); // 0 for Login, 1 for Sign Up

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setError(""); // Clear error when switching tabs
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = authenticateUser(email, password);

    if (user) {
      setIsAuthenticated(true);
      setUser(user);
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const newUser = registerUser(username, email, password);

    if (newUser) {
      setIsAuthenticated(true);
      setUser(newUser);
      navigate("/home");
    } else {
      setError("Failed to create account. Please try again.");
    }
  };
  
  return (
    <Box
      sx={{
        height: "100vh",display: "flex",justifyContent: "center",alignItems: "center",backgroundColor: "transparent",
      }}
    >
      <Card
        sx={{
          width: 350,
          padding: 3,
          borderRadius: 3,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          position: "relative",
        }}
      >
        

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{ marginTop: 5 }}
          textColor="inherit"
          centered
        >
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>

        {/* Tab Content */}
        {activeTab === 0 ? (
          <Box mt={2}>
            <Typography sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Login
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
             {error && (
              <Typography color="error" sx={{ marginTop: 1 }}>
                {error}
              </Typography>
            )}
            <Button
             fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#00b894",
                color: "white",
                fontWeight: "bold",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: "#019467",
                   
                },
              }}
              onClick={handleLogin} 
            >
              Submit
            </Button>
            <Button
              sx={{ textAlign: "center", marginTop: 2, color: "#636e72" }}
              variant="body2"
            >
              Forgot your password?
            </Button>
          </Box>
        ) : (
          <Box mt={2}>
            <Typography sx={{ fontWeight: "bold", marginBottom: 2 }}>
              Sign Up
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              label="Username"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && (
              <Typography color="error" sx={{ marginTop: 1 }}>
                {error}
              </Typography>
            )}

            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#00b894",
                color: "white",
                fontWeight: "bold",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: "#019467",
                },
              }}
              onClick={handleSignUp} 
            >
              Sign Up
            </Button>
          </Box>
        )}
      </Card>
    </Box>
  );
}
