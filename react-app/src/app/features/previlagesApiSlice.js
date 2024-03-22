import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const api = import.meta.env.VITE_APP_API_URL;

const previlagesSliceApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    credentials: "include",
  }),
  reducerPath: "preSlice",
  tagTypes: ["pre"],
  endpoints: (builder) => ({
    // create role
    createPrevilages: builder.mutation({
      query: ({ label, description }) => ({
        url: "/privilege/",
        method: "POST",
        body: { label, description },
      }),
      invalidatesTags: ["pre"],
    }),
    // get all roles
    getAllPrevilages: builder.query({
      query: () => ({
        url: "/privilege/all",
      }),
      providesTags: ["pre"],
    }),
    // get role by id
    getPrevilagesById: builder.query({
      query: (id) => ({
        url: `/privilege/${id}`,
      }),
    }),
    // update role by id
    updatePrevilagesById: builder.mutation({
      query: ({ id, label, description }) => ({
        url: `/privilege/${id}`,
        method: "PATCH",
        body: { label, description },
      }),
      invalidatesTags: ["pre"],
    }),
    // deleteRoleById
    deletePrevilagesById: builder.mutation({
      query: (id) => ({
        url: `/privilege/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["pre"],
    }),
  }),
});

export const {
  useGetAllPrevilagesQuery,
  useGetPrevilagesByIdQuery,
  useCreatePrevilagesMutation,
  useDeletePrevilagesByIdMutation,
  useUpdatePrevilagesByIdMutation,
} = previlagesSliceApi;

export default previlagesSliceApi;
