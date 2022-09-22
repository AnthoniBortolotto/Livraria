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
            >
              <Grid item paddingBottom="24px">
                <CardContent>
                  <CardMedia
                    title={livro.title}
                    image={livro.img}
                    className={styles.CardMediaStyle}
                  />
                </CardContent>
                <Button 
                    variant="contained" 
                    className={styles.button}
                    href={livro.link}
                    target="_blank"
                    >
                    See more details
                    </Button>
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
                      </Grid>
                    </Grid>
                    <Grid container className={styles.reviews}>
                      <Grid item className={styles.rating}>
                          <Grid item xs={8}>
                            <StarRatings
                              precision={0.25}
                              readOnly
                              defaultValue={parseFloat(livro.rating)}
                            />
                          </Grid>
                          <Grid item marginLeft={"2px"}>
                            <Typography>
                            {livro.rating}
                            </Typography>
                          </Grid>
                          <Grid xs={15} style={{color: 'darkgrey', marginLeft: '8px',}}>
                            <Typography>
                            {livro.totalratings} Ratings - {livro.reviews} Reviews
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                  </Grid>
                  <Grid 
                  width="100vh">
                    <Typography variant="h8" className={styles.description}>
                      {livro.desc}
                    </Typography>
                    <hr/>
                    <Typography fontSize={"12px"}>
                      {livro.bookformat}, {livro.pages} pages
                    </Typography>
                    <Typography fontSize={"12px"}>
                      ISBN: {livro.isbn}, ISBN13: {livro.isbn13}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
           <CarrousselItens items={carroussel} title="Veja Mais" />
        </div>
      </section>
    </>
  );
}
