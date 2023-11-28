import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null, 
    created_at: null,
    fullName: "",
    email: "",
    password: "",
    admin: false,
    isLoggedIn: false,
    mealPlan: null
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
            state.admin =  action.payload[0].admin
            state.fullName = action.payload[0].full_name
            state.email = action.payload[0].email
            state.id = action.payload[0].id
        },
        setId(state, action) {
            state.id = action.payload
        },

        setMealPlan(state, action) {
            state.mealPlan = action.payload;
        }
    }
})

export const {setLoggedIn, setFullName, setEmail, setPassword, loginUser, setMealPlan, setId} = authSlice.actions;

export default authSlice.reducer;