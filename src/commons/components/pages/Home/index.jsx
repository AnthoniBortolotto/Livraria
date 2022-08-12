import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import HeadHtml from "../../templates/Head";
import CarousselItens from "../../organisms/CarousselItens";
import CarousselHomeDisplay from "../../molecules/CarousselHomeDisplay";
import axios from "axios";
import { domain } from "../../../helpers/utils/global";

function Home({ itemList, itemListPopular, itemListHighlights, authorPauloC }) {
  return (
    <>
      <HeadHtml />
      <section className="background-gray default-margin">
        <CarousselHomeDisplay />
      </section>
      <section className="default-margin" id="populares">
        <CarousselItens items={itemListPopular} title="Populars" />
      </section>
      <section className="background-yellow default-margin" id="destaques">
        <CarousselItens items={itemListHighlights} title="Highlights" />
      </section>
      <section className="background-gray default-margin" id="descontos">
        <CarousselItens items={itemList} title="Promotions" />
      </section>
      <section className="background-yellow default-margin">
        <CarousselItens items={authorPauloC} title="By Paulo Coelho" />
      </section>
    </>
  );
}

export default Home;
