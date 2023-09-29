import { apiSlice } from "../api/apiSlice";

export const customersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCustomers: builder.query({

            query: ({ itemOffset, parPage, query, searchCompnayName, searchCustomerName, globalSearch }) => {
                if (globalSearch) {
                    return `/customers?page=${itemOffset}&limit=${parPage}&customer_global_search=${globalSearch}`
                }
                else if (searchCustomerName && !searchCompnayName) {
                    // customers?customer_name=ul&order_by_column=company_name&order_by=ASC&page=1&limit=20
                    return `/customers?customer_name=${searchCustomerName}&${query}&page=${itemOffset}&limit=${parPage}`
                }
                else if (searchCompnayName && !searchCustomerName) {
                    // customers?company_name=ul&order_by_column=company_name&order_by=ASC&page=1&limit=20
                    return `/customers?company_name=${searchCompnayName}&${query}&page=${itemOffset}&limit=${parPage}`
                }
                else if ((searchCompnayName) && (searchCustomerName)) {
                    // customer_name=ai&company_name=ul&order_by_column=company_name&order_by=ASC&page=1&limit=20
                    return `/customers?customer_name=${searchCustomerName}&company_name=${searchCompnayName}&${query}&page=${itemOffset}&limit=${parPage}`
                }
                console.log("requst-->", `/customers?${query}&page=${itemOffset}&limit=${parPage}`)

                return `/customers?${query}&page=${itemOffset}&limit=${parPage}`

            },

            providesTags: ["Customers"]

        }),
        // globalSearchCustomer: builder.query({
        //     queryFn: ({ globalSearch, itemOffset, parPage }) => ({
        //         url: `/customers?page=${itemOffset}&limit=${parPage}&customer_global_search=${globalSearch}`
        //     }),
        //     providesTags: ["Customers"]
        // }),
        createCustomers: builder.mutation({
            query: (data) => ({
                url: `/customers`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Customers"]
        })
    })
})

export const { useGetCustomersQuery, useCreateCustomersMutation, useGlobalSearchCustomerQuery } = customersApi;