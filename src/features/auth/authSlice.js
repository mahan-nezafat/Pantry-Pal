import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null, 
    created_at: null,
    fullName: "",
    email: "",
    password: "",
    admin: false,
    isLoggedIn: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoggedIn(state, action) {
            state.isLoggedIn = action.payload;
        },
        setFullName(state, action) {
            state.fullName = action.payload
        },
        
        setEmail(state, action) {
            state.email = action.payload
        },
        
        setPassword(state, action) {
            state.password = action.payload
        },

        checkUser(state, action) {

        }
        
    }
})

export const {setLoggedIn, setFullName, setEmail, setPassword} = authSlice.actions;

export default authSlice.reducer;