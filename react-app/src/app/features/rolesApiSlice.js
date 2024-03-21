import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const api = import.meta.env.VITE_APP_API_URL;

const roleSliceApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: api,
    credentials: "include",
  }),
  reducerPath: "roleSlice",
  tagTypes: ["roles"],
  endpoints: (builder) => ({
    // create role
    createRole: builder.mutation({
      query: ({ label, description }) => ({
        url: "/role/",
        method: "POST",
        body: { label, description },
      }),
      invalidatesTags: ["roles"],
    }),
    // get all roles
    getAllRoles: builder.query({
      query: () => ({
        url: "/role/all",
      }),
      providesTags: ["roles"],
    }),
    // get role by id
    getRoleById: builder.query({
      query: (id) => ({
        url: `/role/${id}`,
      }),
    }),
    // update role by id
    updateRoleById: builder.mutation({
      query: (id, { label, description }) => ({
        url: `/role/${id}`,
        method: "PATCH",
        body: { label, description },
      }),
      invalidatesTags: ["roles"],
    }),
    // deleteRoleById
    deleteRoleById: builder.mutation({
      query: (id) => ({
        url: `/role/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["roles"],
    }),
  }),
});

export const {
  useGetAllRolesQuery,
  useGetRoleByIdQuery,
  useCreateRoleMutation,
  useUpdateRoleByIdMutation,
  useDeleteRoleByIdMutation,
} = roleSliceApi;

export default roleSliceApi;
