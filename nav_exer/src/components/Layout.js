import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import LoginPage from "../pages/Login"; // Import Login Page
import { useLogin } from "../contexts/LoginContext"; // Adjust the path if necessary
import Loader from "./Loader"; // Import Loader component
import { useLoading } from "../contexts/LoadingContext"; // Import Loading Context

const navItems = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "No Page", path: "/nopage" },
  { name: "Pg1", path: "/pg1" },
  { name: "Dash", path: "/dash" },
  { name: "Grades", path: "/grades" },
  { name: "ShowGauge", path: "/showgauge" },
  { name: "DisplayCard", path: "/displaycard" },
  { name: "LoginPage", path: "/loginpage" },
  { name: "Achievements", path: "/achievements" },
];

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation(); // Detect route changes
  const { isLoginOpen, closeLogin, openLogin } = useLogin(); // Access global login state
  const { isLoading, setIsLoading } = useLoading(); // Access global loading state

  useEffect(() => {
    // Trigger loading for 2 seconds on route change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [location.pathname, setIsLoading]);

  return (
    <>
      {/* Top Bar (AppBar) */}
      <AppBar position="static">
        <Toolbar>
          {/* App Title */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>

          {/* Navigation Buttons */}
          <Box>
            {navItems.map((item) => (
              <Button
                key={item.name}
                color="inherit"
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Login Button */}
          <Button
            onClick={openLogin}
            variant="contained"
            color="secondary"
            sx={{ marginLeft: 2 }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Backdrop with Login */}
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={isLoginOpen}
        onClick={closeLogin} // Clicking outside the card closes the backdrop
      >
        <Box onClick={(e) => e.stopPropagation()}> {/* Prevent click-through */}
          <LoginPage />
        </Box>
      </Backdrop>

      {/* Global Loader */}
      <Loader open={isLoading} />

      {/* Render the current page's content */}
      <Box sx={{ padding: 2 }}>
        <Outlet />
      </Box>
    </>
  );
}
