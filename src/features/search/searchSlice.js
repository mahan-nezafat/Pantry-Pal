import { createSlice } from "@reduxjs/toolkit";
import apiKey from "../../services/apiKeys";

const initialState = {
  data: [],
  isSubmit: false,
  isLoading: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    submitSearch(state, action) {
      state.isSubmit = action.payload;
    },
  },
});

export function setData(searchQuery, isSubmit, data) {
  return async function (dispatch) {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}&number=100`);
      const data = await response.json();

      dispatch({ type: "search/setData", payload: data });
      dispatch({ type: "search/setIsLoading", payload: false })
    
    } catch (error) {
    
      console.log(error);
    
    }finally {      
        dispatch({ type: "search/submitSearch", payload: false });
    }
  };
}

export const { setIsLoading, submitSearch } = searchSlice.actions;

export default searchSlice.reducer;
