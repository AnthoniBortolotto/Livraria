import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { mobileScreen } from "../../../helpers/utils/global";
import FilterDrawer from "../../organisms/FilterDrawer";
import styles from "./Discover.module.scss";

function Discover({ itemList }) {
  const [items, setItems] = useState(itemList);
  const isMobile = useMediaQuery(mobileScreen);
  return (
    <>
      {!isMobile && <FilterDrawer items={items} setItems={setItems} />}
      <div>Discover</div>
    </>
  );
}

export default Discover;
