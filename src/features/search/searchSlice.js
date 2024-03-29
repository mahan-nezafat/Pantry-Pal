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
      state.isLoading = action.payload;

    },
    clearAllSearch(state) {
      state = initialState;
      // console.log(state)
  }
  },
});

export function setData(searchQuery) {
  return async function (dispatch) {
    try {
      if(localStorage.getItem('search')) {
        const searchData = JSON.parse(localStorage.getItem('search'));
        return dispatch({type: "search/setData", payload: searchData});
      }
      // dispatch({ type: "search/setIsLoading", payload: true });
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}&number=100`);
      const data = await response.json();

      dispatch({ type: "search/setData", payload: data });
      if(data.results.length > 1) {
        setTimeout(() => {
          dispatch({ type: "search/submitSearch", payload: false });

        }, 4000)
      }
      
    } catch (error) {
      
      console.log(error.message);
      
    }finally {
        dispatch({ type: "search/setIsLoading", payload: false });
        // dispatch({ type: "search/submitSearch", payload: false });
        
      
    }
    
  };
}

export const { setIsLoading, submitSearch, clearAllSearch } = searchSlice.actions;

export default searchSlice.reducer;
