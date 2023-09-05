import React from 'react';
import { useHome } from '../../contexts/HomeProvider';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from 'react-redux';
import { getFood, selectFood, setFoodTitle, getYoutubeId, loadingFood } from '../../features/food/foodSlice';
const RecipeItem = ({ item }) => {
    const {title, image } = item;
    const isLoading = useSelector(state => state.search.isLoading);
    const { isSelected, selectedFoodId, foodTitle } = useSelector(state => state.food);
    const dispatch = useDispatch();
    

    function handleSelected(id, title) {
        dispatch(selectFood(id));
        dispatch(setFoodTitle(title));
        dispatch(getFood(selectedFoodId));
        dispatch(getYoutubeId(foodTitle));
        dispatch(loadingFood(true));
        console.log(isSelected, selectedFoodId);
 
    }


    return (
        <div className='recipe-item'>
           {
             isLoading ? 

                <div className='d-flex'>
                    <Skeleton width={360} height={262} />
                    <Skeleton width={150} height={10} />
                </div>
             :

             <div className='w-100' onClick={() =>  handleSelected(item.id, title)  } >

                <div className="image">
                        <img src={image} alt="food" />
                </div>
                
                <div className="details">
                    
                    <h3>{title}</h3>

                </div>

               
            </div>
           }
        </div>
    );
}
export default RecipeItem;