import React from "react";
import Caroussel from "../../atoms/Caroussel";
import { itemSettings } from "../../../helpers/utils/global";
import { Grid } from "@mui/material/";
import styles from "./CarousselItens.module.scss";
import CardCarousel from "../../atoms/CardCaroussel";

function CarousselItens({ items }) {
  return (
    <div className={styles.containerDesk}>
      <Caroussel settings={itemSettings}>
        {items.map(
          ({ title, imgUrl, creator, rank }, index) =>
            index < 12 && (
              <div className={styles.cardItem} key={index}>
                <CardCarousel
                  CardMediaTitle={title}
                  CardMediaLink={imgUrl}
                  ContentTitle={creator}
                  ContentText={rank}
                />
              </div>
            )
        )}
      </Caroussel>
    </div>
  );
}

export default CarousselItens;
