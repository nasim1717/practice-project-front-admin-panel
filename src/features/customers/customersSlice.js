import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    globalSearch: "",
}

const customersSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        globalSearch: (state, action) => {
            state.globalSearch = action.payload;
        }
    }


});
export const { globalSearch } = customersSlice.actions;
export default customersSlice.reducer;