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
      <Typography variant="h2" color="initial">
        {title}
      </Typography>
      <Caroussel settings={itemSettings}>
        {items.map(
          ({ title, imgUrl, creator, rank }, index) =>
            index < 12 && (
              <div className={styles.cardItem} key={index}>
                <CardCarousel
                  CardMediaTitle={title}
                  CardMediaLink={imgUrl}
                  ContentTitle={creator}
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
