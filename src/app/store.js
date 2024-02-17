import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
  },
});

export default store;
