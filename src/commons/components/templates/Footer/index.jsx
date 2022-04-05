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
      }}
    >
      <Typography align="center" variant="text">
        Todos os direitos reservados
      </Typography>
    </Box>
  );
}

export default Footer;
