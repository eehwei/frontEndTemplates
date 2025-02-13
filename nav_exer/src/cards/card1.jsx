import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Box } from "@mui/material";

const Card1 = ({
  backgroundColor = "",
  color = "black",
  title = "No Title Added",
  subtitle = "No Subtitle Added",
  year = "",
  percentage = "",
  caption = "",
}) => {
  return (
    <Card
      sx={{
        backgroundColor: backgroundColor,
        color: color,
        height: "25vh",
        width: "30vh",
        padding: 2,
        margin: "10px",
      }}
    >
      <Typography sx={{ color: "grey", fontSize: 10 }}>{subtitle}</Typography>
      <Typography fontWeight="bold">{title}</Typography>
      <Typography fontSize={10}>{caption}</Typography>
      <br />
      <hr style={{ border: "1px solid grey" }} />
      <br />
      <Typography fontSize={10}>{year} years</Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontWeight="bold">{percentage}%</Typography>
        <ArrowCircleRightOutlinedIcon />
      </Box>
    </Card>
  );
};

export default Card1;
