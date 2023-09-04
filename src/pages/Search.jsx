import React from "react";
import Food from "../components/main/Food";
import RecipeList from "../components/main/RecipeList";
import { useHome } from "../contexts/HomeProvider";
import Header from "../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, submitSearch, setData } from "../features/search/searchSlice";
import { useState } from "react";
import { fetchData } from "../services/apiSearch";
import { useEffect } from "react";
const Search = () => {
  // const { dispatch, searchQuery, isSelected } = useHome();
  const { data, isLoading, isSubmit, searchQuery } = useSelector((state) => state.search);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(submitSearch(true));
    dispatch(setSearchQuery(searchValue));
    dispatch(setData(searchQuery, isSubmit, data));
    // console.log(data);
  }

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <>
      <Header />

      <div className="search">
        <div className="query-search">
          <form onSubmit={handleSubmit}>
            <input value={searchValue} onChange={handleChange} type="text" placeholder="Enter your query..." />
            <button className={isLoading ? "bg-gray" : ""} >Search</button>
          </form>
        </div>
      </div>
      <RecipeList />
      <Food />
    </>
  );
};

export default Search;
