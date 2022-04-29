import React from "react";
import Caroussel from "../../atoms/Caroussel";
import { itemSettings } from "../../../helpers/utils/global";
import { Grid } from "@mui/material/";
import styles from "./CarousselItens.module.scss";

function CarousselItens({ items }) {
  return (
    <div className={styles.containerDesk}>
      <Caroussel settings={itemSettings}>
        {items.map(
          ({ title, imgUrl }, index) =>
            index < 12 && (
              <div className={styles.cardItem} key={index}>
                <img src={imgUrl} alt={title} />
                {title}
              </div>
            )
        )}
      </Caroussel>
    </div>
  );
}

export default CarousselItens;
