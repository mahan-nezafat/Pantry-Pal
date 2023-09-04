import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/searchSlice";
import foodReducer from "./features/food/foodSlice";
import thunk from "redux-thunk";

const store = configureStore({ 
    reducer: {
        search: searchReducer,
        food: foodReducer
    }

});

export default store;