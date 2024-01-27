import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import searchReducer from "./features/search/searchSlice";
import foodReducer from "./features/food/foodSlice";
import authReducer from "./features/auth/authSlice"
import utilReducer from "./features/util/utilSlice";

//import thunk from "redux-thunk";

const store = configureStore({ 
    reducer: {
        search: searchReducer,
        food: foodReducer,
        auth: authReducer,
        util: utilReducer
    },
});

export default store;