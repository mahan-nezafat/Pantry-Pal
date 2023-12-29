import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import searchImage from "../../assets/images/search-image.jpg";
import mealPlanerImage from "../../assets/images/mealplaner.jpg"
import { Link } from 'react-router-dom';

const Main = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [mealPlanerVisible, setMealPlanerVisible] = useState(false);
  const [scroll, setScroll] = useState(0);
  const search = useRef(null);
  const mealPlaner = useRef(null);

  function handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.target === search.current) {
        setSearchVisible(entry.isIntersecting);
      }
      if (entry.target === mealPlaner.current) {
        setMealPlanerVisible(entry.isIntersecting);
      }
    });
  }

  const options = {
    root: null,
    rootMargin: "50px",
    threshold: 0.25,
  };
  useEffect(() => {
    function createObserver() {
      let observer;

      observer = new IntersectionObserver(handleIntersect, options);

      if (search.current) observer.observe(search.current);

      if (mealPlaner.current) observer.observe(mealPlaner.current);

      return () => {
        if (search.current) observer.unobserve(search.current);

        if (mealPlaner.current) observer.unobserve(mealPlaner.current);
      };
    }
    createObserver();
  }, [options]);
             
  return (
    <>
      <div className=" w-full flex h-full flex-col overflow-hidden bg-[#E0DBDF]">
        <Hero />
        <div
          ref={search}
          className={`w-full h-[100vh] transition-all duration-[1.5s] ease-in-out opacity-0 translate-x-[60%] filter:blur-[4px]  flex ${
            searchVisible ? "animate" : ""
          }`}
        >
          {searchVisible && (
            <div className="w-full h-full flex items-start">
              <div className="w-[40%] h-full flex-col my-[10px] mx-[30px]">
                <img
                  className="w-full h-full rounded"
                  src={searchImage}
                  alt="search"
                />
              </div>
              <div className="flex justify-center flex-col items-center w-[40%] h-full ">
                <h1 className="border-black border-[1px] border-solid rounded p-2"><Link to="/search" >SEARCH</Link>
                </h1>
                <p className="mt-5 w-[50%] text-center">
                  Search for your favorite foods by name, ingredients, tastes,
                  types and diets.
                </p>
              </div>
            </div>
          )}
        </div>
        <div
          ref={mealPlaner}
          className={`w-full mb-5 h-[100vh] transition-all duration-[1.5s] ease-in-out opacity-0 translate-x-[60%] filter:blur-[4px]  flex ${
            mealPlanerVisible ? "animate" : ""
          }`}
        >
          {mealPlanerVisible && (
            <div className="w-full h-full flex items-start">
              <div className="w-[40%] h-full flex-col my-[10px] mx-[30px]">
                <img
                  className="w-full h-full rounded"
                  src={mealPlanerImage}
                  alt="mealplaner"
                />
              </div>
              <div className="flex justify-center flex-col items-center w-[40%] h-full ">
                <h1 className="border-black border-[1px] border-solid rounded p-2"><Link to={"/mealplaner"}>MEAL PLANER</Link>
</h1>
                <p className="mt-5 px-10 text-center">
                    get, add and delete meal planes 
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
