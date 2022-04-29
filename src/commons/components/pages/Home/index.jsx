import { Button, Grid } from "@mui/material";
import React from "react";
import HeadHtml from "../../templates/Head";
import CarousselItens from "../../organisms/CarousselItens";
import CarousselHomeDisplay from "../../molecules/CarousselHomeDisplay";

const item = {
  title: "Teste",
  rank: 4.22,
  imgUrl:
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373217358l/12841140.jpg",
  link: "/",
  creator: "Teste creator",
};

function Home() {
  const itemList = [];
  for (let i = 0; i < 20; i++) {
    itemList.push(item);
  }
  return (
    <>
      <HeadHtml />
      <CarousselHomeDisplay />
      <CarousselItens items={itemList} />
      <Grid container sx={{ minHeight: "80vh" }}>
        <Button variant="contained">Home</Button>
      </Grid>
    </>
  );
}

export default Home;
