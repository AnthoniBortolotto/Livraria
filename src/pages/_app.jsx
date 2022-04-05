import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { globalTheme } from "../commons/helpers/styles/Themes.ts";
import Header from "../commons/components/templates/Header";
import Footer from "../commons/components/templates/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={globalTheme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
