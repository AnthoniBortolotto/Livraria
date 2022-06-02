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
import CardComments from "../../molecules/CardComments";

export default function Book({ livro, carroussel }) {
  /* const comments = [
    {
      user: "João Batista",
      comment: "Livro muito bom",
      rating: 5,
      avatar: `https://thumbs.dreamstime.com/b/avatar-do-homem-tot%C3%B3-104871313.jpg`,
    },
    {
      user: "Roberta Carla",
      comment: "Este livro é um lixo",
      rating: 1.5,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
    },
  ]; */
  const comment = {
    user: "Roberta Carla",
    comment: "Este livro é um lixo",
    rating: 1.5,
    avatar: "https://www.w3schools.com/howto/img_avatar2.png",
  };
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
                  <Typography variant="h1" className={styles.title}>
                    {livro.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="row" justifyContent="space-evenly">
                    <Grid item>
                      <Typography variant="h4" className={styles.rating}>
                        {livro.rating}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <StarRatings
                        rating={parseFloat(livro.rating)}
                        numberOfStars={5}
                        starRatedColor="orange"
                        starDimension="70px"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item xs={6} className={styles.autor}>
                      <Typography variant="h6" marginLeft={14}>
                        Autor: {livro.author}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" marginBottom={5}>
                    O que os leitores falam sobre o livro:
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <CardComments
                    rating={comment.rating}
                    review={comment.comment}
                    avatar={comment.avatar}
                    user={comment.user}
                  />
                  {/* <Grid container justifyContent="space-between">
                    {comments.map(({ rating, review, avatar, user }, i) => (
                      <Grid xs={12} key={i}>
                        <CardComments
                          rating={rating}
                          review={review}
                          avatar={avatar}
                          user={user}
                        />
                      </Grid>
                    ))}
                  </Grid> */}
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
