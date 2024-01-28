import React from "react";
// import Food from "../components/main/Food";
import RecipeList from "../components/search/RecipeList";
import Header from "../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, submitSearch, setData } from "../features/search/searchSlice";
import { useState } from "react";
const Search = () => {
  const {isLoading} = useSelector((state) => state.search);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if(!searchValue) return
    dispatch(submitSearch(true));
    dispatch(setIsLoading(true));
    dispatch(setData(searchValue));
    if(localStorage.getItem('food')) {
      localStorage.removeItem('food');
    }
  }
  

  return (
    <>
      <Header />

      <div className="flex justify-center items-center my-[50px] mx-0">
        <div>
          <form onSubmit={handleSubmit} className="flex justify-center items-center font-[Lato]" >
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Enter your query..." className="rounded py-[9px] px-[15px] dark:border-amber-400 dark:text-amber-400 border-amber-900 border-[1px] border-solid mr-[4px] bg-transparent outline-none text-amber-900 text-[1rem] font-[Lato] placeholder:text-amber-900" />
            <button className={`rounded border-none p-[9px]  transition-all duration-500 ease-in-out font-[1.1rem] ${isLoading ? "bg-amber-900 text-amber-400 dark:bg-[#92400E] dark:text-amber-400" : "text-amber-900 dark:text-amber-400"}`} >Search</button>
          </form>
        </div>
      </div>
      <RecipeList />
    </>
  );
};

export default Search;
