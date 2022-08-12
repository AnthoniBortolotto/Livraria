import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 70,
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography alignItems="center" align="center" variant="text">
        All rights reserved
      </Typography>
    </Box>
  );
}

export default Footer;
