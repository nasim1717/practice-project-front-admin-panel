import { apiSlice } from "../api/apiSlice";

export const customersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCustomers: builder.query({
            query: ({ itemOffset, parPage }) => `/customers?page=${itemOffset}&limit=${parPage}`
        }),
        createCustomers: builder.mutation({
            query: (data) => ({
                url: `/customers`,
                method: "POST",
                body: data,
            }),
        })
    })
})

export const { useGetCustomersQuery, useCreateCustomersMutation } = customersApi;