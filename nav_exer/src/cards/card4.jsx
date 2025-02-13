import * as React from "react";
import Card from "@mui/material/Card";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearWithLabel(props) {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Progress Bar */}
      <LinearProgress
        variant="determinate"
        value={props.value}
        sx={{
          height: 8,
          borderRadius: 5,
          backgroundColor: `${props.barColor}33`, // Transparent version of the barColor
          "& .MuiLinearProgress-bar": {
            backgroundColor: props.barColor || "secondary.main", // Main color for progress
          },
        }}
      />
      {/* Percentage Below */}
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          fontWeight: "bold",
          textAlign: "right",
          marginTop: 0.2, // Reduce the gap above the percentage
        }}
      >
        {`${Math.round(props.value)}%`}
      </Typography>
    </Box>
  );
}

export default function Card4({
  percentage1 = 0,
  percentage2 = 0,
  percentage3 = 0,
  percentage4 = 0,
  barColor = "",
  title = "",
  caption = "",
  amount = "",
  amountColour = "",
  conclusion="",
  field1="",
  field2="",
  field3="",
  field4="",
}) {
  return (
    <Card
      sx={{
        padding: 2,
        margin: 2,
        height:'auto',
        width: '30vh',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {/* Title and Amount Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 16,
              marginBottom: 0.5, // Reduce space below the title
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              marginBottom: 0.5, // Reduce space below the caption
            }}
          >
            {caption}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              color: amountColour || "inherit",
              fontSize: "20px",
              textAlign: "right",
            }}
          >
            {amount}
          </Typography>
        </Box>
      </Box>

      {/* Progress Bar Section */}

      <Box sx={{ width: "100%", marginTop: 1 }}>
        <Typography sx={{color:'text.secondary', fontSize:'15px'}} >{field1}</Typography>
        <LinearWithLabel value={percentage1} barColor={barColor} />
      </Box>
      <Box sx={{ width: "100%", marginTop: 1 }}>
      <Typography sx={{color:'text.secondary', fontSize:'15px'}} >{field2}</Typography>
        <LinearWithLabel value={percentage2} barColor={barColor} />
      </Box>
      <Box sx={{ width: "100%", marginTop: 1 }}>
      <Typography sx={{color:'text.secondary', fontSize:'15px'}} >{field3}</Typography>
        <LinearWithLabel value={percentage3} barColor={barColor} />
      </Box>
      <Box sx={{ width: "100%", marginTop: 1 }}>
      <Typography sx={{color:'text.secondary', fontSize:'15px'}} >{field4}</Typography>
        <LinearWithLabel value={percentage4} barColor={barColor} />
      </Box>


      <Typography sx={{color:'text.secondary', fontSize:'10px'}}>{conclusion}</Typography>

     
    </Card>
  );
}
