import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import HeadHtml from "../../templates/Head";
import CarousselItens from "../../organisms/CarousselItens";
import CarousselHomeDisplay from "../../molecules/CarousselHomeDisplay";
import axios from "axios";
import { domain } from "../../../helpers/utils/global";

function Home({ itemList, itemListPopular, itemListHighlights, authorPauloC }) {
  const dramaFilter = [];
  return (
    <>
      <HeadHtml />
      <section className="background-gray default-margin">
        <CarousselHomeDisplay />
      </section>
      <section className="default-margin" id="populares">
        <CarousselItens items={itemListPopular} title="Os mais populares" />
      </section>
      <section className="background-yellow default-margin" id="destaques">
        <CarousselItens items={itemListHighlights} title="Destaques" />
      </section>
      <section className="background-gray default-margin" id="descontos">
        <CarousselItens items={itemList} title="Com desconto" />
      </section>
      <section className="background-yellow default-margin">
        <CarousselItens items={authorPauloC} title="De Paulo Coelho" />
      </section>
    </>
  );
}

export default Home;
