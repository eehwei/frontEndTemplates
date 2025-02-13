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
          backgroundColor: `red`,
          opacity: "50%", // Transparent version of the barColor
          "& .MuiLinearProgress-bar": {
            backgroundColor: props.barColor || "secondary.main", // Main color for progress
            opacity: "100%",
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

export default function Card3({
  percentage = 0,
  barColor = "",
  title = "",
  caption = "",
  barLabel = "",
  amount = "",
  amountColour = "",
}) {
  return (
    <Card
      sx={{
        padding: 2,
        margin: 2,
        width: "50vh",
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
        <LinearWithLabel value={percentage} barColor={barColor} />
      </Box>

      {/* Bar Label */}
      <Typography
        sx={{
          marginTop: 1, // Reduce space above the bar label
          fontSize: 14,
          textAlign: "left",
          color: "text.secondary",
        }}
      >
        {barLabel}
      </Typography>
    </Card>
  );
}
