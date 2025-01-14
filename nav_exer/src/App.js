import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Pg1 from './pages/Pg1';
import Dash from './pages/Dash';


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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
