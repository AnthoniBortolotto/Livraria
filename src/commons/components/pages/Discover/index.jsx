import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { mobileScreen } from "../../../helpers/utils/global";
import FilterDrawer from "../../organisms/FilterDrawer";
import styles from "./Discover.module.scss";
import DiscoverList from "../../organisms/DiscoverList";
import { searchDescubra } from "../../../helpers/utils/functions";
import { useRouter } from "next/router";

function Discover({ itemList }) {
  const [items, setItems] = useState(itemList);
  const {query, isReady} = useRouter()
  useEffect(() => {
    const {search} = query

    if(search){
      setItems([])
      setItems(searchDescubra(search, itemList)); 
    }else {
      setItems(itemList);
    }
  }, [isReady, query])
  
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
