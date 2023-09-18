import React from "react";
import RecipeItem from "./RecipeItem";
import { useSelector } from "react-redux";
import Food from "../../pages/Food";

const RecipeList = () => {
  const { data, searchQuery } = useSelector((state) => state.search);
  const { isSelected } = useSelector((state) => state.food);
  const { results } = data;
  return (
    <>
      {
        <div className="flex flex-wrap h-full relative justify-start items-center pl-[10px] gap-[14px]">
          {typeof results !== "undefined"
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
