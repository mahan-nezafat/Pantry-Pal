import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from 'react-redux';
import { getFood, selectFood, setFoodTitle, getYoutubeId, loadingFood } from '../../features/food/foodSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../utils/Button';
import heart from '../../assets/images/heart-svgrepo-com.svg'
const RecipeItem = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {title, image } = item;
    const isLoading = useSelector(state => state.search.isLoading);
    const [isLiked, setIsLiked] = useState(false);    

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

             <div className='w-full my-2' >

                <div className="w-full"  onClick={() =>  handleSelected(item.id, title)  }>
                        <img className='w-full rounded' src={image} alt="food" />
                </div>
                
                <div className="flex w-full flex-col justify-center items-center">
                    
                    <h3 className='font-[1rem] whitespace-nowrap' >{title.length > 45 ? title.slice(0,45) : title}</h3>
                    <div className="flex justify-start items-center w-full">
                    <Button type="like" handleClick={() => setIsLiked(!isLiked)} >
                        { isLiked ? 
                            <i class={`fa-solid fa-heart absolute `}></i>
                            :
                            <i class={`fa-regular fa-heart absolute `}></i>
                        }

                    </Button>
                    </div>
                </div>

               
            </div>
           }
        </div>
    );
}
export default RecipeItem;