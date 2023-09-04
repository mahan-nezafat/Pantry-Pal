import { createSlice } from "@reduxjs/toolkit";
import apiKey from "../../services/apiKeys";

const initialState = {
  data: [],
  searchQuery: "",
  isSubmit: false,
  isLoading: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
      console.log(state);
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    submitSearch(state, action) {
      state.isSubmit = action.payload;
      state.isLoading = action.payload;
    },
  },
});

export function setData(searchQuery, isSubmit, data) {
  if (!isSubmit) return { type: "search/setData", payload: data }
  return async function (dispatch) {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}&number=100`);
      const data = await response.json();

      dispatch({ type: "search/setData", payload: data });
      setTimeout(() => {
        dispatch({ type: "search/submitSearch", payload: false });
  
        }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
}

export const { setSearchQuery, submitSearch } = searchSlice.actions;

export default searchSlice.reducer;
