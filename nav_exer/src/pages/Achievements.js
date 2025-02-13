import React from "react";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";
import studypic from '../asset/study.jpg';

const slides = [
    { image: studypic },
    { image: studypic},
    { image: studypic}
  ];
  
  const buttonImages = [
    { image:studypic, text: "Newsletter" },
    { image: studypic, text: "Updates" },
    { image: studypic, text: "New Release" },
    { image: studypic, text: "Baseline" },
    { image: studypic, text: "KPI" }
  ];

const Achievement = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}> {/* Keep 100vh if needed, but be mindful of overflow */}
      <div style={{ flex: 1 }}> {/* Slider takes available space */}
        
          <Carousel autoPlay interval={2000} animation="slide"> {/* Carousel takes care of its height */}
            {slides.map((slide, i) => (
              <div key={i} style={{ position: "relative", width: "100%", height: "auto" }}> {/* height: auto for slides */}
                <img src={slide.image} alt={`Slide ${i + 1}`} 
                     style={{ width: "100%", height: "auto", objectFit: "cover" }} /> {/* height: auto for image */}
                <div style={{ /* ... (text overlay styles remain the same) */ }}>
                  Past Achievement
                </div>
                <div style={{ /* ... (button overlay styles remain the same) */ }}>
                  <Button variant="contained" color="primary">Join Us</Button>
                </div>
              </div>
            ))}
          </Carousel>
       
      </div>

      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", padding: "20px" }}>
        {buttonImages.map((btn, i) => (
          <div key={i} style={{ 
            position: "relative", 
            flex: "1", 
            height: "100%",
            maxWidth: "200px", 
            borderRadius: "10px", 
            overflow: "hidden", 
            cursor: "pointer" 
          }}>
            <img 
              src={btn.image} 
              alt={btn.text} 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ /* ... (text overlay styles remain the same) */ }}>
              {btn.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;