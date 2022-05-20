import React from "react";
import axios from "axios";
import Book from "../../commons/components/pages/Book";
import { domain } from "../../commons/helpers/utils/global";

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
  const books = await axios.get(`${domain}/livros/get`);
  const paths = [];

  books.data.map(({ img, author, genre, rating, title, isbn }, i) => {
    if (i > 78 && author.search(/[¿¥‡]+/) === -1) {
      paths.push({
        params: {
          book: `${isbn}`,
        },
      });
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let bookData = {};
  try {
    bookData = await axios.get(
      `http://localhost:3001/livros/get/isbn/${params.book}`
    );
  } catch (err) {
    bookData = {
      data: "titulo",
    };
  }

  return {
    props: { livroBook: bookData.data[0] },
  };
};

export default function PageBook({ livroBook }) {
  return <Book livro={livroBook} />;
}
