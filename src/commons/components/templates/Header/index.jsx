import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Logo from "../../atoms/Logo";
import MenuIcon from "@mui/icons-material/Menu";
import { mobileScreen } from "../../../helpers/utils/global";
import useMediaQuery from "@mui/material/useMediaQuery";
import LoginForm from "../../organisms/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../../../redux/loginFormSlice";
import Drawer from "@mui/material/Drawer";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "./header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { checkLogin, logout } from "../../../helpers/utils/userValidation";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(checkLogin());
  }, []);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Drawer
      anchor={"left"}
      open={mobileMoreAnchorEl === null ? false : mobileMoreAnchorEl}
      onClose={handleMobileMenuClose}
      PaperProps={{ style: { backgroundColor: "#f9a825" } }}
    >
      <Box sx={{ width: 250 }} role="presentation">
        <List onClick={handleMobileMenuClose}>
          <ListItem disablePadding>
            {isLogged ? (
              <ListItemButton
                onClick={() => {
                  logout();
                  setIsLogged(false);
                }}
              >
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItemButton>
            ) : (
              <ListItemButton
                onClick={() => {
                  dispatch(change());
                }}
              >
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            )}
          </ListItem>
        </List>
        <Divider />
        <List onClick={handleMobileMenuClose}>
          <ListItem disablePadding>
            <Link href="/" passHref>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Início" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link href="/descubra" passHref>
              <ListItemButton>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Descubra" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
  const isMobile = useMediaQuery(mobileScreen);
  const showLoginForm = useSelector(({ showLoginForm }) => showLoginForm.value);
  const [search, setSearch] = useState("");
  const { push } = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{ flexGrow: 1, position: "relative", zIndex: 1 }}>
        <AppBar position="static">
          <Toolbar className="container">
            <Grid container>
              {isMobile && (
                <Grid container item xs={2} md={0}>
                  <MenuIcon
                    onClick={handleMobileMenuOpen}
                    sx={{ marginTop: "7px" }}
                    fontSize="large"
                  />
                </Grid>
              )}
              <Grid item xs={2.5} md={1} lg={0.75}>
                <Logo />
              </Grid>
              {!isMobile && (
                <Grid item container md={1}>
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      display: { xs: "none", sm: "block" },
                      marginTop: "10px",
                    }}
                  >
                    Livraria
                  </Typography>
                </Grid>
              )}
              <Grid item xs={7.5} md={4}>
                <Search sx={{ marginTop: "6px" }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    onKeyDownCapture={(e) => {
                      if (e.key === "Enter") {
                        push({
                          pathname: "/descubra",
                          query: { search: search },
                        });
                      }
                    }}
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    placeholder="Pesquise por livros"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Grid>
              {!isMobile && (
                <Grid item md={6} container justifyContent="flex-end">
                  <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Link href="/descubra" passHref>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={styles.buttonLink}
                      >
                        Descubra mais livros
                      </Button>
                    </Link>
                    {isLogged ? (
                      <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={() => {
                          logout();
                          setIsLogged(false);
                        }}
                        color="inherit"
                      >
                        <ExitToAppIcon />
                      </IconButton>
                    ) : (
                      <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={() => {
                          dispatch(change());
                        }}
                        color="inherit"
                      >
                        <AccountCircle />
                      </IconButton>
                    )}
                  </Box>
                </Grid>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <LoginForm />
    </>
  );
}

export default Header;
