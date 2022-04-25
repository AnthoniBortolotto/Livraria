import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import LoginForm from "../../organisms/LoginForm";

function Layout({ children }) {
  //se quiser converta os states para redux

  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
