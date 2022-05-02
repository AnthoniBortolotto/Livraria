import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import StarRatings from "react-star-ratings";
import styles from "./CardCaroussel.module.scss";
import Button from "@mui/material/Button";

export default function CardCarousel({
  CardMediaTitle,
  CardMediaLink,
  ContentTitle,
  ContentText,
  rank,
}) {
  function handlerCardClick() {
    const url = `/${ContentTitle.replace("%", "$")}`;
    url.replace(" ", "%");
    window.location.href = `http://localhost:3000${url}`;
  }

  return (
    <Grid container item alignContent="stretch" justifyContent="space-between">
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
          <StarRatings
            rating={2.403}
            starRatedColor="orange"
            starDimension="15"
          />
          <div className={styles.CardButtonContainer}>
            <Button variant="outlined">
              <Typography variant="p" component="p">
                {ContentText}
              </Typography>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
