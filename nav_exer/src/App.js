import React, { useState } from "react"; // Add useState
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Add Navigate
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Pg1 from "./pages/Pg1";
import Dash from "./pages/Dash";
import BarChart1 from "./components/BarChart1";
import TimePicker from "./components/TimePicker";
import DonutChart from "./components/Donut";
import Grades from "./pages/Grades";
import ShadedLineChart from "./components/ShadedLineChart";
import Gauge from "./components/Gauge";
import ShowGauge from "./pages/ShowGauge";
import DisplayCard from "./pages/DisplayCard";
import LoginPage from "./pages/Login";
import { LoginProvider } from "./contexts/LoginContext";
import { useLogin } from "./contexts/LoginContext"; // Adjust the path if necessary
import Backdrop from "@mui/material/Backdrop"; // Ensure Backdrop is imported
import { LoadingProvider } from "./contexts/LoadingContext"; // Import LoadingProvider
import Achievements from "./pages/Achievements";

function GlobalLoginBackdrop() {
  const { isLoginOpen, closeLogin } = useLogin();

  return (  
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoginOpen}
      onClick={closeLogin} // Close on backdrop click
    >
      <LoginPage />
    </Backdrop>
  );
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [user, setUser] = useState(null); // User data state

  return (
    <div>
      <LoadingProvider>
        <LoginProvider>
          <BrowserRouter>
            <Routes>
              {/* Make the login page the default route */}
              <Route
                path="/"
                element={
                  isAuthenticated ? (
                    <Navigate to="/home" /> // Redirect to home if authenticated
                  ) : (
                    <LoginPage
                      setIsAuthenticated={setIsAuthenticated}
                      setUser={setUser}
                    /> // Show login page if not authenticated
                  )
                }
              />

              {/* Protected routes */}
              <Route
                path="/"
                element={
                  isAuthenticated ? (
                    <Layout /> // Show layout if authenticated
                  ) : (
                    <Navigate to="/" /> // Redirect to login if not authenticated
                  )
                }
              >
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<NoPage />} />
                <Route path="/pg1" element={<Pg1 />} />
                <Route path="/dash" element={<Dash />} />
                <Route path="/barchart1" element={<BarChart1 />} />
                <Route path="/timepicker" element={<TimePicker />} />
                <Route path="/donutchart" element={<DonutChart />} />
                <Route path="/grades" element={<Grades />} />
                <Route path="/shadedLineChart" element={<ShadedLineChart />} />
                <Route path="/gauge" element={<Gauge />} />
                <Route path="/showgauge" element={<ShowGauge />} />
                <Route path="/displaycard" element={<DisplayCard />} />
                <Route path="/achievements" element={<Achievements />} />
              </Route>

              {/* Login page route */}
              <Route
                path="/loginpage"
                element={
                  <LoginPage
                    setIsAuthenticated={setIsAuthenticated}
                    setUser={setUser}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </LoginProvider>
      </LoadingProvider>
    </div>
  );
};

export default App;