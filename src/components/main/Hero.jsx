import React from "react";
import Header from "../header/Header";
import chevronDown from "../../assets/images/chevron-down.svg";
const Hero = () => {

 


  return (
    <>
      <div className="flex justify-between w-full h-[100vh] flex-col items-center bg-[url('./assets/images/hero.jpg')] bg-center bg-no-repeat bg-cover ">
        <Header />

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2x semi-bold text-centers">Discover Delicious Recipes</h2>
          <h1 className="text-xl bold">At Pantry Pal</h1>
        </div>

        <div className="flex h-[10%] flex-col justify-center items-center text-lg translate-y-[-20px]">
          <span className="text-lg">scroll down to find out more</span>
          <img className="mt-2 w-7 animate-[bounce_1.5s_ease-in-out_infinite]" src={chevronDown} alt="chevron-down" />
        </div>
      </div>
    </>
  );
};

export default Hero;
