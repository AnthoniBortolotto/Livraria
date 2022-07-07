import Home from "../commons/components/pages/Home";
import { getAllBooks, joinedBooks } from "../commons/helpers/utils/functions";

export const getStaticProps = async (ctx) => {
  const [itemList, authorPauloC, popular, highlights] = await getAllBooks();
  return {
    props: {
      authorPauloC,
      itemList,
      itemListPopular: popular,
      itemListHighlights: highlights,
    },
  };
};

export default function Page({
  itemList,
  itemListPopular,
  itemListHighlights,
  authorPauloC,
}) {
  return (
    <Home
      itemList={itemList}
      itemListPopular={itemListPopular}
      itemListHighlights={itemListHighlights}
      authorPauloC={authorPauloC}
    />
  );
}
