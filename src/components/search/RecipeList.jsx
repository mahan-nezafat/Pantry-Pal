import React from "react";
import RecipeItem from "./RecipeItem";
// import { useHome } from '../../contexts/HomeProvider';
import { useSelector } from "react-redux";
import Food from "../../pages/Food";

const RecipeList = () => {
  // const { results, searchQuery, bulkData, isSelected } = useHome();
  const { data, searchQuery } = useSelector((state) => state.search);
  const { isSelected } = useSelector((state) => state.food);
  const { results } = data;
  return (
    <>
      {
        <div className={"recipe-list"}>
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
