import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import Caroussel from "../../atoms/Caroussel";
import styles from "./CarousselHomeDisplay.module.scss";
import { displayItems, mobileScreen } from "../../../helpers/utils/global";
import { scrollTo } from "../../../helpers/utils/functions";

const items = displayItems;

function CarousselHomeDisplay() {
  const isMobile = useMediaQuery(mobileScreen);
  return (
    <>
      {isMobile ? (
        <Caroussel autoPlay>
          {items.map(({ alt, link, img }) => (
            <div
              className={styles.containerMob}
              key={alt}
              onClick={() => scrollTo(link)}
            >
              <img src={`${img}-Mob.png`} alt={alt} />
            </div>
          ))}
        </Caroussel>
      ) : (
        <Caroussel>
          {items.map(({ alt, link, img }) => (
            <div
              className={styles.containerDesk}
              key={alt}
              onClick={() => scrollTo(link)}
            >
              <img src={`${img}.png`} alt={alt} />
            </div>
          ))}
        </Caroussel>
      )}
    </>
  );
}

export default CarousselHomeDisplay;
