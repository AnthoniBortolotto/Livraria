import React from "react";
import styles from "./NextArrow.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function NextArrow({ onClick, style, className }) {
  return (
    <div
      className={`${styles.Button} ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      {/*  <img
        width={50}
        height={50}
        className={template === "prev" ? styles.prev : styles.next}
        src="https://flyclipart.com/thumb2/buy-carousel-button-right-carousel-deck-icon-with-png-and-vector-693813.png"
        alt={template}
      /> */}
      <ArrowForwardIosIcon />
    </div>
  );
}

export default NextArrow;
