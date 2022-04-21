import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import LoginForm from "../../organisms/LoginForm";

function Layout({ children }) {
  //se quiser converta os states para redux
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  return (
    <>
      <Header setShowLoginForm={setShowLoginForm} />
      <div>{children}</div>
      <Footer />
      <LoginForm
        showLoginForm={showLoginForm}
        setShowLoginForm={setShowLoginForm}
        setShowSignUpForm={setShowSignUpForm}
      />
      {/*       <SignUpForm
  showSignUpForm={showSignUpForm}
  setShowLoginForm={setShowLoginForm}
  setShowSignUpForm={setShowSignUpForm}
/> */}
    </>
  );
}

export default Layout;
