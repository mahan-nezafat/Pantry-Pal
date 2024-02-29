import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import searchImage from "../../assets/images/slide1.png";
import mealPlanerImage from "../../assets/images/mealplaner.jpg"
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Main = () => {
  const container = useRef();


  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".slide1", {
      scrollTrigger: {
        trigger: ".slide1",
        // pin: true,
        start: "-50% 50%",
        // end: "100% 10%",
        // scrub: true,
        toggleActions: "restart pause pause reverse",
        // markers: true
        
      },
      opacity: "100%",
      y: 0,
      duration: 0.5,
      // blur: "0px"
    })
    gsap.to(".slide2", {
      scrollTrigger: {
        trigger: ".slide2",
        // pin: true,
        start: "-40% 70%",
        // end: "-600px 10%",
        // scrub: 1
        toggleActions: "restart pause reverse reset",
        // markers: true
        
      },
      opacity: "100%",
      y: 0,
      duration: 0.5,
      // blur: "0px"
    })

  },)


             
  return (
    <>
      <div className="text-amber-900 dark:text-amber-400 w-full flex h-full flex-col overflow-hidden">
        <Hero />
        <div
          ref={container}
          className={`w-[100%] h-[100vh] my-30 snap-start transition-all duration-[1.5s] ease-in-out flex`}
        >
        
            <div className="w-[100%] max-xl:flex-col h-full flex items-center slide1 justify-center  relative translate-y-[180px] opacity-0">
              <div className="w-[62%] max-xl:w-full h-full bg-cover bg-center bg-[url(./assets/images/slide1-min.png)]"></div>
              <div className="flex justify-center flex-col items-center max-xl:w-full max-xl:h-[20%] h-full">
                <p className="mt-5 w-full text-xl text-center">
                  Search for your favorite foods by name, ingredients, tastes,
                  types and diets.
                </p>
                <h1 className="text-xl border-amber-900 border-[1px] border-solid my-5 rounded p-2"><Link to="/search" >SEARCH</Link></h1>
              </div>
            </div>
        </div>
        <div
          ref={container}
          className={`w-full mb-5 h-[100vh] transition-all duration-[1.5s] ease-in-out flex 
          
       `}
        >
          
            <div className="w-full h-full max-xl:flex-col flex items-center justify-center  slide2 translate-y-[180px] opacity-0">
              <div className="w-[62%] max-xl:w-full h-full max-xl:h-[90%] bg-cover bg-center bg-[url(./assets/images/slide4-min.png)]"></div>
              <div className="flex justify-center flex-col items-center h-full  max-xl:w-full max-xl:h-[20%]">
                <p className="mt-5 w-full text-xl text-center ">
                    get, add and delete meal planes 
                </p>
                <h1 className="text-xl border-amber-900 border-[1px] my-5 border-solid rounded p-2"><Link to={"/mealplaner"}>MEAL PLANER</Link>
                </h1>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default Main;
