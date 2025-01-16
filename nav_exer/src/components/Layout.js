import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


const navItems = [
  { name: "Home", path: "/home"},
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  {name:"No Page",path:"/nopage"},
  {name:"Pg1",path:"/pg1"},
  {name:"Dash",path:"/dash"},
  {name:"Grades",path:"/grades"},
  {name:"ShowGauge",path:"/showgauge"},
];

export default function Layout() {
  const navigate = useNavigate();

  return (
    <>
      {/* Top Bar (AppBar) */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MUI
          </Typography>
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
        </Toolbar>
      </AppBar>

      {/* Render the current page's content */}
      <Box sx={{ padding: 2 }}>
        <Outlet />
      </Box>
    </>
  );
}
