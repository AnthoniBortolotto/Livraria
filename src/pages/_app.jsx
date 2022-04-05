import "../styles/globals.css";
import Header from "../commons/components/templates/Header";
import Footer from "../commons/components/templates/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
