import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from "@mui/material/Backdrop";


export default function Loader({open}) {
  return (
    <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 2 }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
  );
}
