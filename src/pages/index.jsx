import Home from "../commons/components/pages/Home";

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
  for (let i = 0; i < 20; i++) {
    itemList.push(item);
  }

  return {
    props: {
      itemList,
    },
  };
};

export default function Page({ itemList }) {
  return <Home itemList={itemList} />;
}
