import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false,
    primaryColor: ['',''],
    secondaryColor: ['',''],
}

const utilSlice = createSlice({
    name: "util",
    initialState,
    reducers: {
        setDarkMode(state, action) {
            state.darkMode = action.payload;
        }
    }
})

export const { setDarkMode } = utilSlice.actions;

export default utilSlice.reducer;
