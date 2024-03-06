import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = "/api/ui";

export const uiApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    credentials: "include",
    timeout: 10000,
  }),
  reducerPath: "uiApiSlice",
  tagTypes: ["ui"],
  endpoints: (build) => ({
    // get menu items
    getMenuItems: build.query({
      query: () => ({
        url: "/menu-items",
      }),
      providesTags: ["ui"],
    }),
  }),
});

export const { useGetMenuItemsQuery } = uiApiSlice;
