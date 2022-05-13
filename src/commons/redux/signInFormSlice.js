import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const signInFormSlice = createSlice({
  name: "showSignInForm",
  initialState,
  reducers: {
    changeSignIn: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = !state.value;
    },
    setFormSignIn: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSignIn, setFormSignIn } = signInFormSlice.actions;

export default signInFormSlice.reducer;
