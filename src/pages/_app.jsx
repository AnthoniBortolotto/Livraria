import "../styles/globals.scss";
import { ThemeProvider } from "@mui/material";
import globalTheme from "../commons/helpers/styles/Themes";
import React from "react";
import { store } from "../commons/redux/store";
import Layout from "../commons/components/templates/Layout";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={globalTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
