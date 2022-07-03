import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import HeadHtml from "../../templates/Head";
import CarousselItens from "../../organisms/CarousselItens";
import CarousselHomeDisplay from "../../molecules/CarousselHomeDisplay";
import axios from "axios";
import { domain } from "../../../helpers/utils/global";

function Home({ itemList, authorPauloC }) {
  const dramaFilter = [];
  // itemList.map((item) => {
  //   item.genres?.map((genre) => {
  //     if ('drama' === genre.toLowerCase()){
  //       dramaFilter.push(item)
  //       console.log(item)}

  //   })

  // })

  return (
    <>
      <HeadHtml />
      <section className="background-gray default-margin">
        <CarousselHomeDisplay />
      </section>
      <section className="default-margin" id="populares">
        <CarousselItens items={itemList} title="Os mais populares" />
      </section>
      <section className="background-yellow default-margin" id="destaques">
        <CarousselItens items={itemList} title="Destaques" />
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
