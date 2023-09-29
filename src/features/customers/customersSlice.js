import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    globalSearch: "",
    customerRefetch: false,
}

const customersSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        globalSearch: (state, action) => {
            state.globalSearch = action.payload;
        },
        customersRefetch: (state, action) => {
            state.customerRefetch = action.payload;
        }
    }


});
export const { globalSearch, customersRefetch } = customersSlice.actions;
export default customersSlice.reducer;