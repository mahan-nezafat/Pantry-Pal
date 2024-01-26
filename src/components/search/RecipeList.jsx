import React from "react";
import RecipeItem from "./RecipeItem";
import { useSelector } from "react-redux";
import Food from "../../pages/Food";

const RecipeList = ({bulkFood}) => {
  const { data, searchQuery } = useSelector((state) => state.search);
  const { isSelected, favFoodsIds } = useSelector((state) => state.food);
  const {results} = data
  return (
    <>
      {
        <div className="flex w-[95%] flex-wrap h-full relative justify-start items-center gap-[22px] mx-auto mb-5">
          
            
              
            
            { 
            typeof results !== "undefined"
            ? Object.values(results).map((item, index) => {
                return <RecipeItem item={item} key={item.id} />;
              })
            : ""}
          
        </div>
      }
    </>
  );
};

export default RecipeList;
