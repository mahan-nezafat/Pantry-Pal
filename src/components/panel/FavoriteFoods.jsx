import React, { useEffect } from "react";
import RecipeList from '../search/RecipeList';
import { getBulkFood } from "../../features/food/foodSlice";
import { useDispatch, useSelector } from "react-redux";
import RecipeItem from "../search/RecipeItem";
const FavoriteFoods = () => {
    const dispatch = useDispatch();
    const {favFoodsIds, bulkFood} = useSelector(store => store.food);
        
    

    return (
      <div className="flex w-full justify-start px-4 mb-10 items-center h-full gap-4 flex-wrap">
          { bulkFood &&
               
               Object.values(bulkFood).map((item, index) => {
                return <RecipeItem item={item} key={item.id}/>
              })
              
            }
        {/* <h1 onClick={handleData}>click </h1> */}
      </div>
    );
}

export default FavoriteFoods