import { apiSlice } from "../api/apiSlice";

export const countryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCountry: builder.query({
            query: () => "/settings/countries?name=a"
        }),
        getState: builder.query({
            query: (id) => `/settings/states?country_id=${id}&name=`

        }),
        getCity: builder.query({
            query: (id) => `/settings/cities?state_id=${id}&name=`
        })
    })
})

export const { useGetCityQuery, useGetCountryQuery, useGetStateQuery } = countryApi;