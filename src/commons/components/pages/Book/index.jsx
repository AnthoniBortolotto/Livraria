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
import CarrousselItens from "../../organisms/CarousselItens";
import CardComments from "../../molecules/CardComments";
import AddReview from "../../molecules/AddReview";
import StarRatings from "@mui/material/Rating";
import HeadHtml from "../../templates/Head";

export default function Book({ livro, carroussel }) {
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
    <>
      <HeadHtml title={`Livraria - ${livro.title}`} />
      <section className={styles.container}>
        <div className={`default-margin containerDesk`}>
          <Card className={styles.CardStyleImg}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              spacing={10}
            >
              <Grid item paddingBottom="24px">
                <CardContent>
                  <CardMedia
                    title={livro.title}
                    image={livro.img}
                    className={styles.CardMediaStyle}
                  />
                </CardContent>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography variant="h1" className={styles.title}>
                      {livro.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid container direction="row" columnGap={10}>
                      <Grid item>
                        <Typography variant="h4" className={styles.rating}>
                          {livro.rating}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <StarRatings
                          defaultValue={parseFloat(livro.rating)}
                          readOnly
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item marginY={2}>
                    <Grid container>
                      <Grid item className={styles.autor}>
                        <Typography variant="h6">
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
          {/*  <CarrousselItens items={carroussel} title="Veja Mais" /> */}
          <div>
            <AddReview />
          </div>
        </div>
      </section>
    </>
  );
}
