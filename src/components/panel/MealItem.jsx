import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {selectFood, getFood, getYoutubeId, loadingFood} from '../../features/food/foodSlice'; 

const MealItem = ({ mealItem }) => {
    const {id, title, } = mealItem;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleSelected(id, title) {
        dispatch(selectFood());
        dispatch(getFood(id));
        dispatch(getYoutubeId(title));
        dispatch(loadingFood(true));
        // let localFood;
        // if(localStorage.getItem('food')) localFood = JSON.parse(localStorage.getItem('food'))
        // if(id !== localFood.id) {
        //     console.log('not matched')

        //     localStorage.removeItem('food');
        // }
        navigate("/food")
 
    }

    return (
        <div onClick={() => handleSelected(id, title)} className="flex p-2 justify-between flex-col w-full h-[40%] border-b-[1px] border-amber-900 border-solid cursor-pointer">
            <img className="w-full h-[90%] rounded" src={`https://spoonacular.com/recipeImages/${mealItem.id}-636x393.jpg`} alt="mealfood" />
            <span className="text-sm text-amber-900 dark:text-amber-400">{mealItem.title.length > 20 ? mealItem.title.slice(0,20) : mealItem.title}</span>
        </div>
    );
}

export default MealItem;