import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import HeadHtml from "../../templates/Head";
import CarousselItens from "../../organisms/CarousselItens";
import CarousselHomeDisplay from "../../molecules/CarousselHomeDisplay";
import axios from "axios";
import { domain } from "../../../helpers/utils/global";

function Home({ itemList }) {
  const dramaFilter = [];

  useEffect(() => {


  }, [])



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
