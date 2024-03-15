import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";
import { userApiSlice } from "./features/userApiSlice";
import { dataApiSlice } from "./features/dataApiSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [dataApiSlice.reducerPath]: dataApiSlice.reducer,
  },

  middleware: (gDM) => {
    return gDM().concat([userApiSlice.middleware, dataApiSlice.middleware]);
  },
});

export default store;
