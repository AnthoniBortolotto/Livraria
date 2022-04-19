import { Button, Grid } from "@mui/material";
import React from "react";
import HeadHtml from "../../templates/Head";
import Caroussel from "../../atoms/Caroussel";
import CarousselHomeDisplay from "../../molecules/CarousselHomeDisplay";

function Home() {
  return (
    <>
      <HeadHtml />
      <CarousselHomeDisplay />
      <Grid container sx={{ minHeight: "80vh" }}>
        <Button variant="contained">Home</Button>
      </Grid>
    </>
  );
}

export default Home;
