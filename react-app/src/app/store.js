import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";
import userSlice from "./features/userSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    auth: userSlice,
  },
});

export default store;
