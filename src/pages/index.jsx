import Home from "../commons/components/pages/Home";
import axios from "axios";
import { domain } from "../commons/helpers/utils/global";

export const getStaticProps = async (ctx) => {
  const item = {
    title: "Teste",
    rank: 4.22,
    imgUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1373217358l/12841140.jpg",
    link: "/",
    creator: "Teste creator",
  };

  const itemList = [];

  //  for (let i = 0; i < 20.length; i++) {
  //    const element = 20[i];

  //  }

  const books = await axios.get(`${domain}/livros/get`);
  books.data.map(({ img, author, genre, rating, title, isbn }, i) => {
    itemList.push({
      title,
      creator: author,
      imgUrl: img,
      link: `/books/${isbn}`,
      genres: genre,
      rank: parseFloat(rating),
    });
  });

  const authorPauloC = [];
  const itensPauloC = await axios.get(`${domain}/livros/get/Paulo Coelho`);
  itensPauloC.data.map(({ img, author, genre, rating, title, isbn }, i) => {
    authorPauloC.push({
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
      authorPauloC,
      itemList,
    },
  };
};

export default function Page({ itemList, authorPauloC }) {
  return <Home itemList={itemList} authorPauloC={authorPauloC} />;
}
