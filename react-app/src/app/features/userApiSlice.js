import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = "/api/user";

export const userApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    credentials: "include",
    timeout: 10000,
  }),
  reducerPath: "userApiSlice",
  tagTypes: ["user"],
  endpoints: (build) => ({
    // get prpfile details query
    getProfileDetails: build.query({
      query: () => ({
        url: "/me",
      }),
      providesTags: ["user"],
    }),
    // login user mutation
    loginUser: build.mutation({
      query: ({ userName, password }) => ({
        url: "/login",
        method: "POST",
        body: { userName, password },
      }),
      invalidatesTags: ["user"],
    }),
    // user Register

    // user logout
    logoutUser: build.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useLogoutUserMutation, useGetProfileDetailsQuery, useLoginUserMutation } = userApiSlice;
