import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import styles from "./book.module.scss";
import CarrousselItens from "../../organisms/CarousselItens";
import CardComments from "../../molecules/CardComments";
import StarRatings from "@mui/material/Rating";
import HeadHtml from "../../templates/Head";

export default function Book({ livro, carroussel }) {
  const comment = {
    user: "Roberta Carla",
    comment: "This book is horrible",
    rating: 1.5,
    avatar: "https://www.w3schools.com/howto/img_avatar2.png",
  };

  return (
    <>
      <HeadHtml
        title={`Livraria - ${livro.title ? livro.title : "Sem titulo"}`}
      />
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
                        <Typography variant="h8" className={styles.genres}>
                          ({livro.genre})
                        </Typography>
                      </Grid>
                  <Grid item marginY={2}>
                    <Grid container>
                      <Grid item className={styles.autor}>
                        <Typography variant="h8">
                          by {livro.author} 
                        </Typography>
                        <Typography style={{color:'darkgray', marginLeft: '5px'}}>
                          ({livro.bookformat})
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item className={styles.rating}>
                          <Grid item xs={5} alignContent="center">
                            <StarRatings
                              size="20px"
                              precision={0.25}
                              readOnly
                              defaultValue={parseFloat(livro.rating)}
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <Typography fontSize="10pt" marginLeft='15px' lineHeight={'2'}>
                            {livro.rating}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h5" marginBottom={5}>
                      What the readers say about this book:
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
                <Typography className={styles.tituloDesc}>
                  Description
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={styles.desc}>{livro.desc}</Typography>
              </Grid>
            </Grid>
          </Card>
          {/*  <CarrousselItens items={carroussel} title="Veja Mais" /> */}
        </div>
      </section>
    </>
  );
}
