import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Pg1 from './pages/Pg1';
import Dash from './pages/Dash';
import BarChart1 from './components/BarChart1';
import TimePicker from './components/TimePicker';
import DonutChart from './components/Donut';
import Grades from './pages/Grades';
import ShadedLineChart from './components/ShadedLineChart';
import Gauge from './components/Gauge';
import ShowGauge from './pages/ShowGauge';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/pg1" element={<Pg1/>}/>
          <Route path="/dash" element={<Dash/>}/>
          <Route path="/barchart1" element={<BarChart1/>}/>
          <Route path="/timepicker" element={<TimePicker/>}/>
          <Route path="/donutchart" element={<DonutChart/>}/>
          <Route path="/grades" element={<Grades/>}/>
          <Route path="/shadedLineChart" element={<ShadedLineChart/>}/>
          <Route path="/gauge" element={<Gauge/>}/>
          <Route path="/showgauge" element={<ShowGauge/>}/>
          
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
