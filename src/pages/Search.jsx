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
    dispatch(setData(searchValue));
    dispatch(setIsLoading(true));
  }
  

  return (
    <>
      <Header />

      <div className="flex justify-center items-center my-[50px] mx-0">
        <div>
          <form onSubmit={handleSubmit} className="flex justify-center items-center font-[Lato]" >
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Enter your query..." className="py-[9px] px-[15px] border-black border-[1px] border-solid mr-[4px] bg-transparent outline-none text-black text-[1rem] font-[Lato] placeholder:text-black" />
            <button className={`border-none p-[9px] bg-black text-white font-[1.1rem] ${isLoading ? "bg-gray" : ""}`} >Search</button>
          </form>
        </div>
      </div>
      <RecipeList />
    </>
  );
};

export default Search;
