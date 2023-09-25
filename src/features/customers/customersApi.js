import { apiSlice } from "../api/apiSlice";

const customersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCustomers: builder.query({
            query: () => "/customers"
        }),
    })
})

export const { useGetCustomersQuery } = customersApi;