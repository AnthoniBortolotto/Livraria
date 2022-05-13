import { configureStore } from "@reduxjs/toolkit";
import loginFormSlice from "./loginFormSlice";
import SignInFormSlice from "./signInFormSlice";

export const store = configureStore({
  reducer: {
    showLoginForm: loginFormSlice,
    showSignInForm: SignInFormSlice,
  },
});
