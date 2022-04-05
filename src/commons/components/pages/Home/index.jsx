import { Button, Grid } from "@mui/material";
import React from "react";
import HeadHtml from "../../templates/Head";

function Home() {
  return (
    <>
      <HeadHtml />
      <Grid container sx={{ minHeight: "80vh" }}>
        <Button variant="contained">Home</Button>
      </Grid>
    </>
  );
}

export default Home;
