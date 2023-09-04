import React from 'react';
import { useHome } from '../../contexts/HomeProvider';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDispatch, useSelector } from 'react-redux';

const RecipeItem = ({ item }) => {
    // const { dispatch, isLoading } = useHome();
    const {title, image } = item;
    // const { extendedIngredients } = typeof fullInfo !== "undefined" ? fullInfo : 0
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.search.isLoading);
     
    
    return (
        <div className='recipe-item'>
           {
             isLoading ? 

                <div className='d-flex'>
                    <Skeleton width={313} height={232} />
                    <Skeleton width={150} height={10} />
                </div>
             :

             <div className='w-100' onClick={() =>{ 

                dispatch({type: "SelectedFoodId", payload: item.id});
                dispatch({type: "Title", payload: title});}}
            >
                
                
                    
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