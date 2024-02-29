import React, { useEffect } from "react";
import RecipeItem from "./RecipeItem";
import { useSelector } from "react-redux";
import Food from "../../pages/Food";
import noResults from "../../assets/images/no-results-found.svg"
const RecipeList = ({bulkFood}) => {
  const { data, searchQuery } = useSelector((state) => state.search);
  const { isSelected, favFoodsIds } = useSelector((state) => state.food);
  const {results} = data;
  let localResults;
  if(localStorage.getItem('search')) {

    localResults = JSON.parse(localStorage.getItem('search'))  
  }
  useEffect(() => {
    if(data.length <= 0) return;
    localStorage.setItem('search', JSON.stringify(data));
  }, [data])

  return (
    <>
      {
        <div className="flex w-[95%] flex-wrap h-full relative justify-start items-center gap-[22px] mx-auto mb-5">
         {  
          results && results.length <= 0 &&
            <div className="w-full h-full flex flex-col justify-center items-center">
              <img className="w-60" src={noResults} alt="no-results"/>
              <h1 className="text-xl text-amber-500">no search results found</h1>
            </div>        
            
         }    
            
            { 
            typeof results !== "undefined"
            ? Object.values(results).map((item, index) => {
                return <RecipeItem item={item} key={item.id} />;
              })
            : 
            
             ""
            
            }
          
        </div>
      }
    </>
  );
};

export default RecipeList;
