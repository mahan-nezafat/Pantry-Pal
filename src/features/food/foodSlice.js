import { createSlice } from "@reduxjs/toolkit";

const apiKey = "76c7a80de4fc4832927537ed53f92d14";
// "8c9b44dff7454d2bb7def613b0bade75";
//  "f88e395dfddb4a21837e281aa658717c";
// "856ff9a8e5554f3198e5a473b5d101a8";
// "4defd47d816c4e5692caafff6528e6a2";

const initialState = {
  selectedFoodId: "",
  selectedFoodInformation: {},
  foodTitle: "",
  youtubeId: "",
  isSelected: false,
  isLoading: false,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    selectFood(state, action) {
      state.selectedFoodId = action.payload;
      state.isSelected = true;
    },
    getFood(state, action) {
      state.selectedFoodInformation = action.payload;
    },
    closeFood(state, action) {
      state.isSelected = action.payload;
    },
    setFoodTitle(state, action) {
      state.foodTitle = action.payload;
    },
    setYoutubeId(state, action) {
      // if(!action.payload) return;
      state.youtubeId = action.payload;
    },
    loadingFood(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export function getFood(selectedFoodId) {
  // if (selectedFoodId.length === 0) return { type: "food/getFood", payload:  };
  return async function (dispatch) {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/${selectedFoodId}/information?apiKey=${apiKey}`);
      const data = await response.json();

      dispatch({ type: "food/getFood", payload: data });
      dispatch({ type: "food/loadingFood", payload: false });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getYoutubeId(foodTitle, isSelected) {
  // if (!isSelected) return;

  return async function (dispatch) {
    try {
      const response = await fetch(`https://api.spoonacular.com/food/videos/search?apiKey=${apiKey}&query=${foodTitle}`);
      const data = await response.json();
      const videos = data.videos[0];
      if (typeof videos === "undefined") return;

      const youtubeId = Object.values(videos)[2];

      dispatch({ type: "food/setYoutubeId", payload: youtubeId });
    } catch (error) {
      console.log(error);
    }
  };
}

export const { selectFood, closeFood, setFoodTitle, loadingFood } = foodSlice.actions;

export default foodSlice.reducer;
