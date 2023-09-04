import { createSlice } from "@reduxjs/toolkit"


const apiKey = "8c9b44dff7454d2bb7def613b0bade75";
// "76c7a80de4fc4832927537ed53f92d14";
//  "f88e395dfddb4a21837e281aa658717c";
// "856ff9a8e5554f3198e5a473b5d101a8";
// "4defd47d816c4e5692caafff6528e6a2";


const initialState = {
    selectedFoodId: null,
    selectedFoodInformation: {},
    foodTitle: "",
    youtubeId: "",
    isSelected: false,
    isLoading: false
}

const foodSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
        selectFood(state, action) {
            state.selectedFoodId = action.payload;
        },
        setFood(state, action) {
            state.selectedFoodInformation = action.payload;
            state.isSelected = true;
        },
        closeFood(state, action) {
            state.isSelected = false;
        },
        setFoodTitle(state, action) {
            state.foodTitle = action.payload
        },
        setYoutubeId(state, action) {
            if(!action.payload) return;
            state.youtubeId = action.payload;
        }
    }
});

export const { selectFood, closeFood, setFoodTitle } = foodSlice.actions;


export default foodSlice.reducer;