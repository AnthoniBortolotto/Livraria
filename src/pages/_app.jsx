import "../styles/globals.scss";
import { ThemeProvider } from "@mui/material";
import globalTheme from "../commons/helpers/styles/Themes";
import Header from "../commons/components/templates/Header";
import Footer from "../commons/components/templates/Footer";
import LoginForm from "../commons/components/organisms/LoginForm";
import SignUpForm from "../commons/components/organisms/SignUpForm";
import React, { useState } from "react";
import Layout from "../commons/components/templates/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={globalTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
