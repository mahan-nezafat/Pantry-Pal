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

      <div className="search">
        <div className="query-search">
          <form onSubmit={handleSubmit}>
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Enter your query..." />
            <button className={isLoading ? "bg-gray" : ""} >Search</button>
          </form>
        </div>
      </div>
      <RecipeList />
    </>
  );
};

export default Search;
