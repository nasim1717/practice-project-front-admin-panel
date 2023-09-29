import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLogout } from "../auth/authSlice";


const baseQuery = fetchBaseQuery({
    baseUrl: "https://backend.galaxyshipping.live/api/v1",
    prepareHeaders: async (headers, { getState, endpoint }) => {
        const token = getState()?.userAuth?.accesstoken;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        headers.set("Accept", "application/json");
        return headers;
    },
});


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: async (args, api, extraOptions) => {
        let result = await baseQuery(args, api, extraOptions);
        if (result?.error?.status === 401) {
            api.dispatch(userLogout());
            localStorage.clear();
        }

        return result;
    },
    tagTypes: ["Customers", "GlobalCustomers"],
    // eslint-disable-next-line no-unused-vars
    endpoints: (builder) => ({})
});