import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    accesstoken: undefined,
    user: undefined,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.accesstoken = action.payload?.accesstoken;
            state.user = action.payload?.user;
        },
        userLogout: (state) => {
            state.accesstoken = undefined;
            state.user = undefined;
        }
    }
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;