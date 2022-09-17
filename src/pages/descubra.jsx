import React, { useEffect, useState } from "react";
import Discover from "../commons/components/pages/Discover";
import { domain } from "../commons/helpers/utils/global";
import axios from "axios";
import { useRouter } from "next/router";
import { searchDescubra } from "../commons/helpers/utils/functions";

export const getStaticProps = async ({ params }) => {
  const itemList = [];
  const books = await axios.get(`${domain}/books/`);
  books.data.map(({ img, author, genre, rating, title, isbn }, i) => {
    itemList.push({
      title,
      creator: author,
      imgUrl: img,
      link: `/books/${isbn}`,
      genres: genre == null ? "Unclassified" : genre,
      rank: parseFloat(rating),
      isbn: isbn,
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
