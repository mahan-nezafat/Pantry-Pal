import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import searchReducer from "./features/search/searchSlice";
import foodReducer from "./features/food/foodSlice";
import authReducer from "./features/auth/authSlice"
import thunk from "redux-thunk";

const store = configureStore({ 
    reducer: {
        search: searchReducer,
        food: foodReducer,
        auth: authReducer
    },
});

export default store;