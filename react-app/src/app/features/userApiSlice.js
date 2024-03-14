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
    // get profile details query
    getProfileDetails: build.query({
      query: () => ({
        url: "/me",
      }),
      providesTags: ["user"],
    }),
    // login user mutation
    loginUser: build.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["user"],
    }),
    // user logout
    logoutUser: build.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["user"],
    }),
    // user registration
    registerUser: build.mutation({
      query: ({ firstName, lastName, email, password, companyName }) => ({
        url: "/signup",
        method: "POST",
        body: { firstName, lastName, email, password, companyName },
      }),
      invalidatesTags: ["user"],
    }),
    // update user role
    updateUserRole: build.mutation({
      query: ({ id, role }) => ({
        url: `/update-role/${id}`,
        method: "PUT",
        body: { role },
      }),
      invalidatesTags: ["user"],
    }),
    // update user password
    updatePassword: build.mutation({
      query: ({ oldPassword, newPassword }) => ({
        url: "/update-password",
        method: "PUT",
        body: { oldPassword, newPassword },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useLogoutUserMutation, useGetProfileDetailsQuery, useLoginUserMutation, useRegisterUserMutation, useUpdateUserRoleMutation, useUpdatePasswordMutation } = userApiSlice;
