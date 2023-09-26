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

        loginUser(state, action) {
            state.admin =  action.payload.admin
            state.fullName = action.payload.full_name
            state.email = action.payload.email
            state.id = action.payload.id
            state.isLoggedIn = true
        }
        
    }
})

export const {setLoggedIn, setFullName, setEmail, setPassword, loginUser} = authSlice.actions;

export default authSlice.reducer;