import { apiSlice } from "../api/apiSlice";

const customersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCustomers: builder.query({
            query: () => "/customers"
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