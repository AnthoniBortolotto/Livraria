import { Grid } from "@mui/material";
import React from "react";
import HeadHtml from "../../templates/Head";
import CarousselItens from "../../organisms/CarousselItens";
import CarousselHomeDisplay from "../../molecules/CarousselHomeDisplay";

function Home({ itemList }) {
  return (
    <>
      <HeadHtml />
      <section>
        <CarousselHomeDisplay />
      </section>
      <section>
        <CarousselItens items={itemList} title="Os mais populares" />
      </section>
      <section>
        <CarousselItens items={itemList} title="Destaques" />
      </section>
      <section>
        <CarousselItens items={itemList} title="Com desconto" />
      </section>
      <section>
        <CarousselItens items={itemList} title="De Paulo Coelho" />
      </section>
    </>
  );
}

export default Home;
