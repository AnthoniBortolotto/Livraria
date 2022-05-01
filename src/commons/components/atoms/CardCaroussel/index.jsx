import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import styles from "./CardCaroussel.module.scss";

export default function CardCarousel({
  CardMediaTitle,
  CardMediaLink,
  ContentTitle,
  ContentText,
}) {
  function handlerCardClick() {
    const url = `/${ContentTitle.replace("%", "$")}`;
    url.replace(" ", "%");
    window.location.href = `http://localhost:3000${url}`;
  }

  return (
    <Grid container item alignContent="stretch" justify="space-between">
      <Card className={styles.CardStyle} onClick={handlerCardClick}>
        <CardContent>
          <CardMedia
            title={CardMediaTitle}
            image={CardMediaLink}
            className={styles.CardMediaStyle}
          />

          <Typography component="h6" className={styles.ProdutoStyle}>
            {ContentTitle}
          </Typography>
          <Typography component="p" className={styles.PrecoStyle}>
            {ContentText}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
