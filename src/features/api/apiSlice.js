import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://backend.galaxyshipping.live/api/v1",
    }),
    tagTypes: [],
    // eslint-disable-next-line no-unused-vars
    endpoints: (builder) => ({})
})