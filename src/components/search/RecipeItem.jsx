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
        <div className='w-[24%] flex justify-center items-center flex-col cursor-pointer bg-white text-black'>
           {
             isLoading ? 

                <div className='flex'>
                    <Skeleton width={360} height={262} />
                    <Skeleton width={150} height={10} />
                </div>
             :

             <div className='w-full' onClick={() =>  handleSelected(item.id, title)  } >

                <div className="w-full">
                        <img className='w-full rounded' src={image} alt="food" />
                </div>
                
                <div className="flex w-full justify-center items-center">
                    
                    <h3 className='font-[1rem] whitespace-nowrap' >{title.length > 45 ? title.slice(0,45) : title}</h3>

                </div>

               
            </div>
           }
        </div>
    );
}
export default RecipeItem;