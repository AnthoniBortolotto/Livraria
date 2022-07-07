import React from "react";
import Caroussel from "../../atoms/Caroussel";
import { itemSettings } from "../../../helpers/utils/global";
import { Grid } from "@mui/material/";
import styles from "./CarousselItens.module.scss";
import CardCarousel from "../../atoms/CardCaroussel";
import Typography from "@mui/material/Typography";

function CarousselItens({ items, title }) {
  return (
    <div className={styles.containerDesk}>
      <Typography marginY={5} variant="h2" color="initial">
        {title}
      </Typography>
      <Caroussel settings={itemSettings}>
        {items.map(
          ({ title, imgUrl, link, genres, creator, rank }, index) =>
            index < 12 &&
            link !== "/books/null" && (
              <div className={styles.cardItem} key={index}>
                <CardCarousel
                  CardMediaTitle={creator}
                  CardMediaLink={imgUrl}
                  ContentTitle={title}
                  link={link}
                  genres={genres}
                  rank={rank}
                  ContentText={"Veja mais"}
                />
              </div>
            )
        )}
      </Caroussel>
    </div>
  );
}

export default CarousselItens;
