import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import StarRatings from "react-star-ratings";
import styles from "./CardCaroussel.module.scss";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { treatAuthor, treatTitle } from "../../../helpers/utils/functions";

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
  const treatedTitle = treatTitle(ContentTitle);
  const treatedAuthor = treatAuthor(CardMediaTitle);
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
                {treatedTitle}
              </Typography>
            </div>
            <div className={styles.CardButtonContainer}>
              <Typography
                component="p"
                variant="p"
                className={styles.AuthorStyle}
              >
                {treatedAuthor}
              </Typography>
            </div>
            <div className={styles.CardButtonContainer}>
              <Rating defaultValue={rank} precision={0.1} />
            </div>
            <div className={styles.CardButtonContainer}>
              <Button variant="outlined">
                <Typography variant="p" component="h4">
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
