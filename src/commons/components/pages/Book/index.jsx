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
import CarrousselItens from "../../organisms/CarousselItens";

export default function Book({ livro, carroussel }) {
  useEffect(() => {
    console.log(livro);
  }, []);

  return (
    <section className={styles.container}>
      <div className={`default-margin containerDesk`}>
        <Card className={styles.CardStyleImg}>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            spacing={10}
          >
            <Grid item>
              <CardContent>
                <CardMedia
                  title={livro.title}
                  image={livro.img}
                  className={styles.CardMediaStyle}
                />
              </CardContent>
            </Grid>
            <Grid item>
              <Grid container direction="column" justifyContent="space-between">
                <Grid item>
                  <Typography variant="h4" className={styles.title}>
                    {livro.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <StarRatings
                    rating={parseFloat(livro.rating)}
                    numberOfStars={5}
                    starRatedColor="orange"
                    starDimension="90px"
                  />
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography variant="h4" className={styles.rating}>
                        {livro.rating}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} className={styles.autor}>
                      Autor: {livro.author}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
        <Card className={styles.CardStyleDsc}>
          <Grid container direction="column" justifyContent="space-between">
            <Grid item xs={12}>
              <Typography className={styles.tituloDesc}>Descrição</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={styles.desc}>{livro.desc}</Typography>
            </Grid>
          </Grid>
        </Card>
        <CarrousselItens items={carroussel} title="Veja Mais" />
      </div>
    </section>
  );
}
