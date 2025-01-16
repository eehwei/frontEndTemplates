import React from 'react';
import { GaugeComponent } from 'react-gauge-component';
import './Gauge.css'; // Ensure this file exists if needed for additional styling

const Gauge = () => {
  return (
    <div className="gauge-container">
      <GaugeComponent
        arc={{
          subArcs: [
            { limit: 20, color: '#EA4228' },
            { limit: 40, color: '#F58B19' },
            { limit: 60, color: '#F5CD19' },
            { limit: 100, color: '#5BE12C' },
          ],
        }}
        value={30}
        hideValue={false}
        valueStyle={{
          color: 'black !important', // Make text color solid black
          fontSize: '24px', // Adjust font size
          fontWeight: 'bold', // Ensure font is bold
          color: 'black !important', // Make text color solid black
          textShadow: 'none ', // Remove any shadow effects
          color: 'black !important', // Make text color solid black
          WebkitTextStroke: '0px !important', // Remove any stroke effect
        }}
        ticks={{
          showTicks: false, // Hide tick marks
        }}
      />
    </div>
  );
};

export default Gauge;
