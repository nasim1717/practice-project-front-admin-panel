import { apiSlice } from "../api/apiSlice";
import { userLogin } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    const responsed = await queryFulfilled;
                    localStorage.setItem("auth", JSON.stringify({ accesstoken: responsed.data?.access_token, user: responsed.data?.user }));
                    // console.log("responed-->", responsed.data);
                    dispatch(userLogin({ accesstoken: responsed.data?.access_token, user: responsed.data?.user }));
                } catch (er) {
                    // do nothing
                }
            }
        })
    })
})

export const { useLoginMutation } = authApi