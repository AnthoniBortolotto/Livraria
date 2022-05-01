import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./PrevArrow.module.scss";

function PrevArrow({ onClick, className, style }) {
  return (
    <div
      className={`${styles.Button} ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon />
    </div>
  );
}

export default PrevArrow;
