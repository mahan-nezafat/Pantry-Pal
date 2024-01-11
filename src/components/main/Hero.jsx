import React from "react";
import Header from "../header/Header";
// import ChevronDown from "../../assets/images/chevron-down.svg";
import ChevronDown from "../utils/ChvronDown";
import hero from "../../assets/images/hero.png";
import { useSelector } from "react-redux";
const Hero = () => {

  const { darkMode } = useSelector(store => store.util);


  return (
    <>
      <div className=" flex justify-between w-full h-[100vh] flex-col items-center hero bg-center bg-no-repeat bg-cover dark:bg-[#310F01] transition-background duration-1000 ease-in-out ">
        <Header />

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2x semi-bold text-centers">Discover Delicious Recipes</h2>
          <h1 className="text-xl bold">At Pantry Pal</h1>
        </div>

        <div className="flex h-[10%] flex-col justify-center items-center text-lg translate-y-[-20px]">
          <span className="text-lg">scroll down to find out more</span>
          <ChevronDown className="mt-2 animate-[bounce_1.8s_ease-in-out_infinite]" height={25} width={25} fillColor={darkMode ? "#ED8935" : "#78350f"} />
        </div>
      </div>
    </>
  );
};

export default Hero;
