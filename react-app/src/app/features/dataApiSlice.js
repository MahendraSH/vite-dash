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
    // create form
    createForm: build.mutation({
      query: (formData) => ({
        url: "/form",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["form"],
    }),
    // get all forms
    getForms: build.query({
      query: () => ({
        url: "/form/all",
        method: "GET",
      }),
      providesTags: ["form"],
    }),
    // update form by ID
    updateFormById: build.mutation({
      query: ({ id, formData }) => ({
        url: `/form/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["form"],
    }),
    // delete form by ID
    deleteFormById: build.mutation({
      query: ({ id }) => ({
        url: `/form/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["form"],
    }),
  }),
});

export const { useGetTableDataQuery, useGetFormsQuery, useGetFormDataQuery, useCreateFormMutation, useUpdateFormByIdMutation, useDeleteFormByIdMutation } = dataApiSlice;
