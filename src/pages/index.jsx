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

  const books = await axios.get(`${domain}/livros/get`)
  books.data.map(({
    img,
    author,
    genre,
    rating,
    title

  }, i) => {
    if (i > 78 && author.search(/[¿¥‡]+/) === -1) {
      itemList.push({
        title,
        creator: author,
        imgUrl: img,
        link: `/${author}/${title}`,
        genres: genre,
        rank: parseFloat(rating)
      })
    }

  })

  return {
    props: {
      itemList,
    },
  };
};

export default function Page({ itemList }) {
  return <Home itemList={itemList} />;
}
