import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import StarRatings from "react-star-ratings";
import styles from "./CardComments.module.scss";

function CardComments({ rating, review, avatar, user }) {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={avatar}
          alt="Avatar do usuário"
        />
        <CardContent>
          <Typography component="h5" variant="h5">
            {user}
          </Typography>
          <StarRatings rating={rating} starRatedColor="orange" />
          <Typography variant="h5" component="p">
            {review}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default CardComments;
