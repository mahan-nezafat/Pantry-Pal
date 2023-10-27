import { createSlice } from "@reduxjs/toolkit";

const apiKey = "f88e395dfddb4a21837e281aa658717c";

const initialState = {
  selectedFoodInformation: {},
  youtubeId: "",
  isSelected: false,
  isLoading: false,
  favFoodsIds: [],
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    selectFood(state) {
      state.isSelected = true;
    },
    getFood(state, action) {
      state.selectedFoodInformation = action.payload;
    },
    closeFood(state, action) {
      
      state.selectedFoodInformation = initialState.selectedFoodInformation
      state.youtubeId = initialState.youtubeId
      state.isSelected = initialState.isSelected
      state.isLoading = initialState.isLoading

    },
    
    setYoutubeId(state, action) {
      state.youtubeId = action.payload;
    },
    loadingFood(state, action) {
      state.isLoading = action.payload;
    },
    addFavFoodsIds(state, action) {
      console.log(typeof state.favFoodsIds, state.favFoodsIds)
      if(state.favFoodsIds.find(id => id === action.payload)) return
      state.favFoodsIds.push(action.payload)
      
    },
    removeFavFoodsIds(state, action) {
      state.favFoodsIds = state.favFoodsIds.filter(id => id !== action.payload)
    },
    setFoodsIds(state, action) {
      state.favFoodsIds = action.payload
    }
  
  },
});

export function getFood(selectedFoodId) {
  return async function (dispatch) {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/${selectedFoodId}/information?apiKey=${apiKey}`);
      const data = await response.json();

      dispatch({ type: "food/getFood", payload: data });

    } catch (error) {
      console.log(error);
    }
  };
}

export function getYoutubeId(foodTitle) {

  return async function (dispatch) {
    try {
      const response = await fetch(`https://api.spoonacular.com/food/videos/search?apiKey=${apiKey}&query=${foodTitle}`);
      const data = await response.json();
      const videos = data.videos[0];
      if (typeof videos === "undefined") return dispatch({ type: "food/loadingFood", payload: false });
      
      const youtubeId = Object.values(videos)[2];

      dispatch({ type: "food/setYoutubeId", payload: youtubeId });
      dispatch({ type: "food/loadingFood", payload: false });

    } catch (error) {
      console.log(error);
    }
  };
}

export const { selectFood, closeFood, setFoodTitle, loadingFood, addFavFoodsIds, removeFavFoodsIds, setFoodsIds } = foodSlice.actions;

export default foodSlice.reducer;
