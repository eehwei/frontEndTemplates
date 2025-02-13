import React from "react";

export const card1 = {
    sx: { backgroundColor: "red" },
    subhead: "profit",
    amount: 988.9,
  };

  export const card2 = {
    sx: { backgroundColor: "green" },
    subhead: "revenue",
    amount: 788.99,
  };
  
  export const card3 = {
    sx: { backgroundColor: "blue" },
    subhead: "loss",
    amount: 466.73,
  };
  
  export default function AboutCards({ data }) {
    return (
      <div style={data.sx}>
        <h3>{data.subhead}</h3>
        <p>Amount: {data.amount}</p>
      </div>
    );
  }