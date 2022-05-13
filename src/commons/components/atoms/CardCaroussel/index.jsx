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
  genres,
  link,
  rank,
}) {
  function handlerCardClick() {
    const url = `/${ContentTitle.replace("%", "$")}`;
    url.replace(" ", "%");
    window.location.href = link;
  }

  return (
    <Grid container item justifyContent="space-between">
      <Card className={styles.CardStyle} onClick={handlerCardClick}>
        <CardContent>
          <CardMedia
            title={CardMediaTitle}
            image={CardMediaLink}
            className={styles.CardMediaStyle}
          />
          <div className={styles.ContentContainer}>
            <div className={styles.CardButtonContainer}>
              <Typography
                component="h3"
                variant="h6"
                className={styles.ProdutoStyle}
              >
                {ContentTitle}
              </Typography>
            </div>
            <div className={styles.CardButtonContainer}>
              <Typography
                component="p"
                variant="p"
                className={styles.AuthorStyle}
              >
                {CardMediaTitle}
              </Typography>
            </div>
            <div className={styles.CardButtonContainer}>
              <StarRatings
                rating={rank}
                numberOfStars={5}
                starRatedColor="orange"
                starDimension="15px"
              />
            </div>
            <div className={styles.CardButtonContainer}>
              <Button variant="outlined">
                <Typography variant="p" component="p">
                  {ContentText}
                </Typography>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}
