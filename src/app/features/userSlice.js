import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  status: "idle",
  error: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    signUp: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = {};
    },
  },
});

export const { signIn, signUp, logoutUser } = authSlice.actions;

export default authSlice.reducer;
