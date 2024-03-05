import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";
import { userApiSlice } from "./features/userApiSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },

  middleware: (gDM) => gDM().concat(userApiSlice.middleware),
});

export default store;
