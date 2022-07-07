import axios from "axios";
import { domain } from "./global";

export function treatTitle(title, width) {
  let treatedTitle = title;
  if (treatedTitle.length > 40) {
    treatedTitle = treatedTitle.substring(0, 40);
    treatedTitle += "...";
  }
  return treatedTitle;
}

export function treatAuthor(author, width) {
  return author;
  let treatedAuthor = author;
  if (treatedAuthor.length > 20) {
    treatedAuthor = treatedAuthor.substring(0, 20);
    treatedAuthor += "...";
  }
  return treatedAuthor;
}

export function scrollTo(id) {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
}

export function searchDescubra(search, items) {
  const results = [];
  items.map((item, index) => {
    if (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.creator.toLowerCase().includes(search.toLowerCase()) ||
      item.genres.toLowerCase().includes(search.toLowerCase())
    ) {
      results.push(item);
    }
  });

  return results;
}

export async function getAllBooks() {
  const itemList = [];
  const authorPauloC = [];
  const popular = [];
  const highlights = [];
  // run all the requests at same time
  const [books, itensPauloC, itensPopular, itensHighlights] = await axios.all([
    axios.get(`${domain}/livros/get`),
    axios.get(`${domain}/livros/get/Paulo Coelho`),
    axios.get(`${domain}/livro/get/livro/rate/4`),
    axios.get(`${domain}/livro/get/livro/genre/fiction`),
  ]);
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

  itensPauloC.data.map(({ img, author, genre, rating, title, isbn }, i) => {
    authorPauloC.push({
      title,
      creator: author,
      imgUrl: img,
      link: `/books/${isbn}`,
      genres: genre,
      rank: parseFloat(rating),
    });
  });

  itensPopular.data.map(({ img, author, genre, rating, title, isbn }, i) => {
    popular.push({
      title,
      creator: author,
      imgUrl: img,
      link: `/books/${isbn}`,
      genres: genre,
      rank: parseFloat(rating),
    });
  });

  itensHighlights.data.map(({ img, author, genre, rating, title, isbn }, i) => {
    highlights.push({
      title,
      creator: author,
      imgUrl: img,
      link: `/books/${isbn}`,
      genres: genre,
      rank: parseFloat(rating),
    });
  });

  return [itemList, authorPauloC, popular, highlights];
}
//join arrays of objects without duplicates
export async function joinedBooks() {
  const [itemList, authorPauloC, popular, highlights] = await getAllBooks(); //arrays of objects
  //stringify arrays of objects
  const stringifiedItemList = [];
  itemList.map((item) => {
    stringifiedItemList.push(JSON.stringify(item));
  });
  const stringifiedAuthorPauloC = [];
  authorPauloC.map((item) => {
    stringifiedAuthorPauloC.push(JSON.stringify(item));
  });
  const stringifiedPopular = [];
  popular.map((item) => {
    stringifiedPopular.push(JSON.stringify(item));
  });
  const stringifiedHighlights = [];
  highlights.map((item) => {
    stringifiedHighlights.push(JSON.stringify(item));
  });
  //concat arrays of stringified objects
  const stringJoined = stringifiedItemList.concat(
    stringifiedAuthorPauloC,
    stringifiedPopular,
    stringifiedHighlights
  );
  const unique = [...new Set(stringJoined)]; //remove duplicates
  const uniqueBooks = [];
  //parse stringified objects
  unique.map((item) => {
    uniqueBooks.push(JSON.parse(item));
  });
  return uniqueBooks;
}
