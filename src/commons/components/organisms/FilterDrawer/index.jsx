import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import styles from "./FilterDrawer.module.scss";
import AccordionDrawer from "../../atoms/AccordionDrawer";
import Rating from "@mui/material/Rating";

function FilterDrawer({ items, setItems }) {
  const [filterGenres, setFilterGenres] = useState([]);
  const [minRating, setMinRating] = useState(null);
  const [maxRating, setMaxRating] = useState(null);
  function handlerFilter(genre) {
    if (filterGenres.includes(genre)) {
      setFilterGenres(filterGenres.filter((item) => item !== genre));
    } else {
      setFilterGenres([...filterGenres, genre]);
    }
    console.log(filterGenres);
  }

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
      
    >
      <List>
        <AccordionDrawer title="Gêneros">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => handlerFilter("Drama")}
                  name="Drama"
                />
              }
              label="Drama"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => handlerFilter("Horror")}
                  name="Horror"
                />
              }
              label="Terror"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => handlerFilter("Thriller")}
                  name="Thriller"
                />
              }
              label="Suspense"
            />
          </FormGroup>
        </AccordionDrawer>
        <Typography component="legend">Nota Mínima</Typography>
        <Rating
          value={minRating}
          onChange={(event, newValue) => {
            setMinRating(newValue);
          }}
          precision={0.5}
        />
        <Typography component="legend">Nota Máxima</Typography>
        <Rating
          precision={0.5}
          value={maxRating}
          onChange={(event, newValue) => {
            setMaxRating(newValue);
          }}
        />
      </List>
    </Drawer>
  );
}

export default FilterDrawer;
