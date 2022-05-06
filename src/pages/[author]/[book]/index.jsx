import React from 'react'
import Book from '../../../commons/components/pages/Book';


export async function getStaticProps(){

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

}

export async function getStaticPaths(ctx) {
const {author, book} = 
    
}

function Book() {
  return (
    <Book />
  )
}

export default Book;