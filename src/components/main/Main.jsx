import React, { useEffect, useRef, useState } from 'react';
import Hero from './Hero';
import searchImage from '../../../src/assets/images/search-image.jpg';
import { useMemo } from 'react';
const Main = () => {

    const [searchVisible, setSearchVisible] = useState(false);
    const [tastesVisible, setTastesVisible] = useState(false);
    const [typesVisible, setTypesVisible] = useState(false);
    const [recommendedVisible, setRecommendedVisible] = useState(false);
    const [scroll, setScroll] = useState(0);
    const search = useRef(null)
    const tastes = useRef(null)
    const types = useRef(null)
    const recommended = useRef(null)

    function handleIntersect(entries) {

        entries.forEach(entry => {
            if(entry.target === search.current) {
                setSearchVisible(entry.isIntersecting)
            }
            if(entry.target === tastes.current) {
                setTastesVisible(entry.isIntersecting)
            }
            if(entry.target === types.current) {
                setTypesVisible(entry.isIntersecting)
            }
            if(entry.target === recommended.current) {
                setRecommendedVisible(entry.isIntersecting)
            }

        });
        
    

    }

   const options = {
    root: null,
    rootMargin: "50px",
    threshold: 0.25
    } 
    useEffect(() => {
        function createObserver() {
            let observer;
            
            observer = new IntersectionObserver(handleIntersect, options);
            // if(ref.current) observer.observe(ref.current);

            if(search.current) observer.observe(search.current)
            
            if(types.current) observer.observe(types.current)

            if(recommended.current) observer.observe(recommended.current)

            if(tastes.current) observer.observe(tastes.current)
                return () => {
                        
                    if(search.current) observer.unobserve(search.current)
                    
                    if(types.current) observer.unobserve(types.current)

                    if(recommended.current) observer.unobserve(recommended.current)

                    if(tastes.current) observer.unobserve(tastes.current)

                    }
                }
                createObserver();
            },[options]);


    return ( 
        <>
            <div  className="w-full flex h-full flex-col overflow-hidden bg-[#E0DBDF]" >
                <Hero />
                <div ref={search}  className={`w-full h-[100vh] transition-all duration-[1.5s] ease-in-out opacity-0 translate-x-[60%] filter:blur-[4px]  flex ${searchVisible ? "animate" : ""}`}>
                    {
                        searchVisible && 
                        <div className='w-full h-full flex'>
                            <div className='w-[40%] h-full my-[20px] mx-[30px]'>
                                <img className='w-full h-full' src={searchImage} alt="search" />
                            </div>
                            <div className='flex justify-center items-center flex-col w-[40%] h-full '>
                                <h1>this is search</h1>
                                <p>search detail</p>
                            </div>
                        </div>
                    }
                </div>
               
            </div>
        </>
     );
}
 
export default Main ;