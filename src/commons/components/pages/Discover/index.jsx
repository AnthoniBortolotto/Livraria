import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { mobileScreen } from "../../../helpers/utils/global";
import FilterDrawer from "../../organisms/FilterDrawer";
import styles from "./Discover.module.scss";
import DiscoverList from "../../organisms/DiscoverList";

function Discover({ itemList }) {
  const [items, setItems] = useState(itemList);
  const isMobile = useMediaQuery(mobileScreen);
  return (
    <div className={styles.container}>
      <section className={styles.filter}>
        {!isMobile && <FilterDrawer items={items} setItems={setItems} />}
      </section>
      <section className={styles.list}>
        <DiscoverList items={items} />
      </section>
    </div>
  );
}

export default Discover;
