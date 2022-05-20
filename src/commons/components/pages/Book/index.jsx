import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import styles from "./book.module.scss";
import StarRatings from "react-star-ratings";

export default function Book({ livro }) {
  useEffect(() => {
    console.log(livro);
  }, []);

  return (
    <section className="default-margin containerDesk">
      <Grid container direction="row" justifyContent="space-between">
        <Grid item>
          <Card className={styles.CardStyle}>
            <CardContent>
              <CardMedia
                title={livro.title}
                image={livro.img}
                className={styles.CardMediaStyle}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Grid container direction="column" justifyContent="space-between">
            <Grid item>
              <Typography variant="h4" className={styles.title}>
                {livro.title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={styles.desc}>{livro.desc}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}
