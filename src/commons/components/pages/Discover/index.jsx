import React, { useState } from "react";
import FilterDrawer from "../../organisms/FilterDrawer";
import styles from "./Discover.module.scss";

function Discover({ itemList }) {
  const [items, setItems] = useState(itemList);
  return (
    <>
      <FilterDrawer items={items} setItems={setItems} />
      <div>Discover</div>
    </>
  );
}

export default Discover;
