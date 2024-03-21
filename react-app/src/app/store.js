import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";
import { userApiSlice } from "./features/userApiSlice";
import { dataApiSlice } from "./features/dataApiSlice";
import roleSliceApi from "./features/rolesApiSlice";
import previlagesSliceApi from "./features/previlagesApiSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [dataApiSlice.reducerPath]: dataApiSlice.reducer,
    [roleSliceApi.reducerPath]: roleSliceApi.reducer,
    [previlagesSliceApi.reducerPath]: previlagesSliceApi.reducer,
  },

  middleware: (gDM) => {
    return gDM().concat([
      userApiSlice.middleware,
      dataApiSlice.middleware,
      roleSliceApi.middleware,
      previlagesSliceApi.middleware,
    ]);
  },
});

export default store;
