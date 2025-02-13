import React from "react";
import ShadedLineChart from "../components/ShadedLineChart";
import Box from "@mui/material/Box";
import { data1, data2, data3 } from "../components/DataScp";

export default function Grades() {
  return (
    <Box display="flex" flexDirection="row" gap={3}>
      {/* Chart 1 */}
      <Box
        sx={{
          width: 400,
          height: 300,
          margin: "auto",
          backgroundColor: "#f5f5f5",
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <ShadedLineChart data={data1} color ="red" />
      </Box>

      {/* Chart 2 */}
      <Box
        sx={{
          width: 400,
          height: 300,
          margin: "auto",
          backgroundColor: "#f5f5f5",
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <ShadedLineChart data={data2} color ="blue"/>
      </Box>

      {/* Chart 3 */}
      <Box
        sx={{
          width: 400,
          height: 300,
          margin: "auto",
          backgroundColor: "#f5f5f5",
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <ShadedLineChart data={data3} color ="black" />
      </Box>
    </Box>
  );
}
