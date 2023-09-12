import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from 'react-redux';
import { getFood, selectFood, setFoodTitle, getYoutubeId, loadingFood } from '../../features/food/foodSlice';
import { useNavigate } from 'react-router-dom';
const RecipeItem = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {title, image } = item;
    const isLoading = useSelector(state => state.search.isLoading);
    

    function handleSelected(id, title) {
        dispatch(selectFood());
        dispatch(getFood(id));
        dispatch(getYoutubeId(title));
        dispatch(loadingFood(true));
        navigate("/food")
 
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
                    
                    <h3>{title.length > 45 ? title.slice(0,45) : title}</h3>

                </div>

               
            </div>
           }
        </div>
    );
}
export default RecipeItem;