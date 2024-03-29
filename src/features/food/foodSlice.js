import { createSlice } from "@reduxjs/toolkit";

import apiKey from "../../services/apiKeys";


const initialState = {
  selectedFoodInformation: {},
  bulkFood: null,
  youtubeId: "",
  isSelected: false,
  isLoading: false,
  favFoodsIds: [],
  isLiked: false
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
      console.log('working')
    },
    getBulkFood(state, action) {
      state.bulkFood = action.payload;
    },
    closeFood(state, action) {
      
      // state.selectedFoodInformation = initialState.selectedFoodInformation
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
      state.favFoodsIds.filter(id => id !== action.payload)
      state.favFoodsIds.push(action.payload)
      
    },
    removeFavFoodsIds(state, action) {
      state.favFoodsIds = state.favFoodsIds.filter(id => id !== action.payload)
    },
    setFoodsIds(state, action) {
      state.favFoodsIds = action.payload;
    },
    setIsLiked(state, action) {
      state.isLiked = action.payload;
    },
    clearAllFood(state) {
      state = initialState;
      // console.log(state)
  }
  
  },
});

export function getFood(selectedFoodId) {
  return async function (dispatch) {
    try {
      if(localStorage.getItem('food')) {
        const localFoodData = JSON.parse(localStorage.getItem('food'));
        return dispatch({ type: "food/getFood", payload:localFoodData })
      }
      const response = await fetch(`https://api.spoonacular.com/recipes/${selectedFoodId}/information?apiKey=${apiKey}`);
      const data = await response.json();

      dispatch({ type: "food/getFood", payload: data });

    } catch (error) {
      console.log(error);
    }
  };
}

export function getBulkFood(favFoodsIds) {
  return async function (dispatch) {
    try {
      let favFoodsIdsStrings = favFoodsIds.join(",")
      const response = await fetch(`https://api.spoonacular.com/recipes/informationBulk?ids=${favFoodsIdsStrings}&apiKey=${apiKey}`);
      const data = await response.json();
      
      let filteredData = []
      data.forEach(item => {
        const {title, id, image} = item;
        filteredData.push({title, id, image})
      })
      // console.log(filteredData)

      dispatch({ type: "food/getBulkFood", payload: filteredData});

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

export const {clearAllFood, selectFood, closeFood, setFoodTitle, loadingFood, addFavFoodsIds, removeFavFoodsIds, setFoodsIds, setIsLiked } = foodSlice.actions;

export default foodSlice.reducer;
