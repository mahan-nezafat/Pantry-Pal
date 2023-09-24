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
        createUser(state, action) {
            state.admin = action.payload.admin
            state.created_at = action.payload.created_at
            state.email  = action.payload.email
            state.fullName  = action.payload.full_name
            state.id  = action.payload.id
            state.password  = action.payload.password
        },
        checkUser(state, action) {

        }
        
    }
})

export const {setLoggedIn, createUser} = authSlice.actions;

export default authSlice.reducer;