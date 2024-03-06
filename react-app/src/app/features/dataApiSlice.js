import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = "/api/data";
export const dataApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    credentials: "include",
    timeout: 10000,
  }),
  tagTypes: ["form", "table", "data"],
  endpoints: (build) => ({
    // get form data
    getFormData: build.query({
      query: ({ id }) => ({
        url: `/form/${id}`,
      }),
      providesTags: ["data", "form"],
    }),
    // get table data
    getTableData: build.query({
      query: ({ id }) => ({
        url: `/table/${id}`,
      }),
      providesTags: ["data", "table"],
    }),
  }),
});

export const { useGetTableDataQuery, useGetFormDataQuery } = dataApiSlice;
