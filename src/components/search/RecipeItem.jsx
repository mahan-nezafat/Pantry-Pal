import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from 'react-redux';
import { getFood, selectFood, getYoutubeId, loadingFood, removeFavFoodsIds, addFavFoodsIds, setIsLiked } from '../../features/food/foodSlice';
import { useNavigate } from 'react-router-dom';
import { updateFoodIds } from '../../services/dataBaseApis';
import Button from '../utils/Button';
import { setIsLoading } from '../../features/search/searchSlice';
const RecipeItem = ({ item, handleData }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {title, image} = item;
    const {isLoading} = useSelector(store => store.search);
    const {id, isLoggedIn} = useSelector(store => store.auth);
    const {favFoodsIds, isSelected, bulkFood, selectedFoodInformation} = useSelector(store => store.food)
    const [isLiked, setIsLiked] = useState(false);    
    let modifiedTitle;
    if(window.innerWidth <= 1024) {
        modifiedTitle = title.slice(0, 20)
    }
   

    function handleSelected(id, title) {
        
        console.log("ff")
        dispatch(selectFood());
        dispatch(getFood(id));
        dispatch(getYoutubeId(title));
        dispatch(loadingFood(true));
            
        navigate("/food")
        
    }

    
    function handleLike() {
        if(!isLoggedIn) return navigate("/login");
        
        setIsLiked(!isLiked);
        if(isLiked) {
            dispatch(removeFavFoodsIds(item.id));
            
        }else {
            dispatch(addFavFoodsIds(item.id));   
        }
        if(handleData) {
            handleData()
        }
    }

    useEffect(() => {
        if(!isLoggedIn) return;

        let foodIds = favFoodsIds.join(" ")
        updateFoodIds(id, foodIds)

    }, [isLiked, favFoodsIds]);

    useEffect(() => {
        if(!isLoading) return;
        // if(isLoading || bulkFood.length > 0) {

            favFoodsIds.find(id => {
                if(Number(id) === item.id) { 
                    setIsLiked(true)
                    // console.log(typeof id, id, typeof item.id, item.id)
                }
            })
        // }
    }, [isLoading])
      
    return (
        <div className='max-xl:w-[23%] max-lg:w-[31%] max-md:w-[47%]  w-[19%] h-[10%] flex justify-center items-center flex-col cursor-pointer bg-transparent text-amber-900 dark:text-amber-400'>
           {
             isLoading ? 

                <div className='w-full mx-2 '>
                    <div className="w-full">

                    <Skeleton width={325} height={262} />
                    </div>
                    <div className="flex w-full flex-col justify-center items-center">

                    <Skeleton width={150} height={10} />
                    </div>
                </div>
             :

             <div className='w-full h-full ' >

                <div className="w-full h-full"  onClick={() =>  handleSelected(item.id, title)  }>
                        <img className='w-full rounded hover:rounded-none transition-all duration-150 ease-in-out' src={image} alt="food" />
                </div>
                
                <div className="flex w-full flex-col justify-center h-[40px] items-center">
                    
                    <div className="flex justify-between items-center h-full w-full">

                        <Button type="like" handleClick={handleLike} >
                            { isLiked ? 
                                <i className={`fa-solid fa-heart absolute `}></i>
                                :
                                <i className={`fa-regular fa-heart absolute `}></i>
                            }

                        </Button>
                        <div className='w-[90%] flex justify-center items-center'>
                        <h3 className='font-[1rem] whitespace-nowrap ' >{modifiedTitle ? modifiedTitle : title.slice(0, 30)}</h3>

                        </div>
                    </div>
                </div>

               
            </div>
           }
        </div>
    );
}
export default RecipeItem;