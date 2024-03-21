import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = import.meta.env.VITE_APP_API_URL;

export const userApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    credentials: "include",
    timeout: 10000,
  }),
  reducerPath: "Api",
  tagTypes: ["user", "menu"],
  endpoints: (build) => ({
    // get profile details query
    getProfileDetails: build.query({
      query: () => ({
        url: "/user/me",
      }),
      providesTags: ["user"],
    }),
    // login user mutation
    loginUser: build.mutation({
      query: ({ email, password }) => ({
        url: "/user/login",
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["user", "menu"],
    }),
    // user logout
    logoutUser: build.mutation({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
      invalidatesTags: ["user", "menu"],
    }),
    // user registration
    registerUser: build.mutation({
      query: ({ firstName, lastName, email, password, companyName }) => ({
        url: "/user/signup",
        method: "POST",
        body: { firstName, lastName, email, password, companyName },
      }),
      invalidatesTags: ["user", "menu"],
    }),
    // update user role
    updateUserRole: build.mutation({
      query: ({ id, role }) => ({
        url: `/user/update-role/${id}`,
        method: "PUT",
        body: { role },
      }),
      invalidatesTags: ["user"],
    }),
    // update user password
    updatePassword: build.mutation({
      query: ({ oldPassword, newPassword }) => ({
        url: "/user/user/update-password",
        method: "PUT",
        body: { oldPassword, newPassword },
      }),
      invalidatesTags: ["user"],
    }),
    // get all users
    getAllUsers: build.query({
      query: () => ({
        url: "/user/all",
      }),
      providesTags: ["user"],
    }),
    // get menu items
    getMenuItems: build.query({
      query: () => ({
        url: "/ui/menu-items",
      }),
      providesTags: ["menu"],
    }),
    createUser: build.mutation({
      query: (values) => ({
        url: "/user/create",
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useLogoutUserMutation,
  useGetProfileDetailsQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useUpdateUserRoleMutation,
  useUpdatePasswordMutation,
  useGetAllUsersQuery,
  useGetMenuItemsQuery,
  useCreateUserMutation,
} = userApiSlice;
