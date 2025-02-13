import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import AboutCards, { card1, card2, card3 } from "../components/AboutCards";

export default function About() {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(card1); // Default state with card1

  // Function to handle card selection
  const handleCardSelection = (card) => {
    setSelectedCard(card);
  };

  const [count,setCount]=useState(0);
  const increment=()=>{setCount(count+1)};
  const decrement=()=>{setCount(count-1)};

  return (
    <Box>
      <Header />
      <h2>About Page</h2>
      <p>You clicked {count} times.</p>
      <button onClick={increment}>increment!</button>
      <button onClick={decrement}>Decrement!</button>

      {/* Render the selected card */}
      <AboutCards data={selectedCard} />

      {/* Buttons to switch between cards */}
      <Box display="flex" justifyContent="space-around" mt={2}>
        <button onClick={() => handleCardSelection(card1)}>Show Card 1</button>
        <button onClick={() => handleCardSelection(card2)}>Show Card 2</button>
        <button onClick={() => handleCardSelection(card3)}>Show Card 3</button>
      </Box>
      
    </Box>
  );
}
