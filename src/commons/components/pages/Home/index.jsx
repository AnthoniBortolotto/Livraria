import { Grid } from "@mui/material";
import React from "react";
import HeadHtml from "../../templates/Head";
import CarousselItens from "../../organisms/CarousselItens";
import CarousselHomeDisplay from "../../molecules/CarousselHomeDisplay";

function Home({ itemList }) {
  return (
    <>
      <HeadHtml />
      <section className="background-gray default-margin">
        <CarousselHomeDisplay />
      </section>
      <section className="default-margin">
        <CarousselItens items={itemList} title="Os mais populares" />
      </section>
      <section className="background-yellow default-margin">
        <CarousselItens items={itemList} title="Destaques" />
      </section>
      <section className="background-gray default-margin">
        <CarousselItens items={itemList} title="Com desconto" />
      </section>
      <section className="background-yellow default-margin">
        <CarousselItens items={itemList} title="De Paulo Coelho" />
      </section>
    </>
  );
}

export default Home;
