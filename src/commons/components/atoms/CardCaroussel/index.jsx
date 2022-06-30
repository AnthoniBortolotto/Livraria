import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import styles from "./CardCaroussel.module.scss";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { treatAuthor, treatTitle } from "../../../helpers/utils/functions";
import Link from "next/link";

export default function CardCarousel({
  CardMediaTitle,
  CardMediaLink,
  ContentTitle,
  ContentText,
  genres,
  link,
  rank,
}) {
  const treatedTitle = treatTitle(ContentTitle);
  const treatedAuthor = treatAuthor(CardMediaTitle);
  return (
    <Grid container item justifyContent="space-between">
      <Link href={link} passHref>
        <a>
          <Card className={styles.CardStyle}>
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
                  <Rating defaultValue={rank} precision={0.1} readOnly />
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
        </a>
      </Link>
    </Grid>
  );
}
