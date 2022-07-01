import React, { useState } from "react";
import { itemSettings } from "../../../helpers/utils/global";
import Button from "@mui/material/Button";
import styles from "./DiscoverList.module.scss";
import CardCarousel from "../../atoms/CardCaroussel";

function DiscoverList({ items }) {
  const [maxCard, setMaxCard] = useState(30);
  return (
    <>
      <div className={styles.container}>
        {items.map(
          ({ title, imgUrl, link, genres, creator, rank }, index) =>
            index < maxCard && (
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
      </div>
      <div className={styles.moreButton}>
        <Button variant="contained" onClick={() => setMaxCard(maxCard + 30)}>
          Ver Mais
        </Button>
      </div>
    </>
  );
}

export default DiscoverList;
