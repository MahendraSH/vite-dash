import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";
import { userApiSlice } from "./features/userApiSlice";
import { dataApiSlice } from "./features/dataApiSlice";
import { uiApiSlice } from "./features/uiApiSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [dataApiSlice.reducerPath]: dataApiSlice.reducer,
    [uiApiSlice.reducerPath]: uiApiSlice.reducer,
  },

  middleware: (gDM) => {
    return gDM().concat([userApiSlice.middleware, dataApiSlice.middleware, uiApiSlice.middleware]);
  },
});

export default store;
