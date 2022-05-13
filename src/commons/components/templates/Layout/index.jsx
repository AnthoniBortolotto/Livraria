import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import LoginForm from "../../organisms/LoginForm";
import { SingleBed } from "@mui/icons-material";
import SignInForm from "../../organisms/SignUpForm";

function Layout({ children }) {
  //se quiser converta os states para redux

  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
      <SignInForm />
    </>
  );
}

export default Layout;
