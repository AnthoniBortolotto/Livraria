import React from "react";
import Discover from "../commons/components/pages/Discover";
import { domain } from "../commons/helpers/utils/global";
import axios from "axios";

export const getStaticProps = async (ctx) => {
  const itemList = [];
  const books = await axios.get(`${domain}/livros/get`);
  books.data.map(({ img, author, genre, rating, title, isbn }, i) => {
    itemList.push({
      title,
      creator: author,
      imgUrl: img,
      link: `/${isbn}`,
      genres: genre,
      rank: parseFloat(rating),
    });
  });

  return {
    props: {
      itemList,
    },
  };
};

function Page({ itemList }) {
  return <Discover itemList={itemList} />;
}

export default Page;
