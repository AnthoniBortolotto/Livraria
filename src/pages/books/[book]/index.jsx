import react from "react";
import axios from "axios";
import Book from "../../../commons/components/pages/Book";
import { domain } from "../../../commons/helpers/utils/global";
import { useState, useEffect } from "react";
import { joinedBooks } from "../../../commons/helpers/utils/functions";

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths = async (ctx) => {
  const books = await joinedBooks();
  const paths = [];

  console.log(books);

  books.map(({ img, author, genre, rating, title, isbn }, i) => {
    if (isbn && isbn != null) {
      paths.push({
        params: {
          book: `${isbn}`,
          author: `${author}`,
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
  let carroussel = [];
  const itemList = [];

  bookData = await axios.get(`http://localhost:3001/books/${params.book}`);
  bookData = await bookData.data;

  carroussel = await axios.get(
    `http://localhost:3001/books/author/${bookData.author}`
  );
  carroussel = await carroussel.data;

  

  return {
    props: {
      livroBook: bookData,
      carrousselItens: carroussel,
    },
  };
};

export default function PageBook({ livroBook, carrousselItens }) {

  return <Book livro={livroBook} carroussel={carrousselItens} />;
}
