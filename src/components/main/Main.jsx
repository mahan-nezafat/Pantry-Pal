import React, { useEffect, useRef, useState } from 'react';
import Hero from './Hero';
// import RecipeList from './RecipeList';
// import Header from '../header/Header';
import searchImage from '../../../src/assets/images/search-image.jpg';
import typesImage from '../../assets/images/types.jpg';
import recommendedImage from '../../assets/images/recommended.jpg';
import tastesImage from '../../assets/images/tastes.jpg';
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
            <div  className="main" >
                <Hero />
                <div ref={search}  className={`search-main vh-100 d-flex ${searchVisible ? "animate" : ""}`}>
                    {
                        searchVisible && 
                        <div className='section'>
                            <div className='left-part'>
                                <img src={searchImage} alt="search" />
                            </div>
                            <div className='right-part'>
                                <h1>this is search</h1>
                                <p>search detail</p>
                            </div>
                        </div>
                    }
                </div>
                <div ref={types} className={`types-main vh-100 d-flex ${typesVisible ? "animate" : ""}`}>
                    {
                        typesVisible && 
                        <div className='section'>
                           <div className='left-part'>
                            <img src={typesImage} alt="types" />
                           </div>
                            <div className='right-part'>
                                <h1>this is types</h1>
                                <p>types detail</p>
                            </div>
                           
                        </div>
                    }
                </div>
                <div ref={recommended} className={`recommended-main vh-100 d-flex ${recommendedVisible ? "animate" : ""}`}>
                    {
                        recommendedVisible && 
                        <div className='section'>
                           <div className='left-part'>
                            <img src={recommendedImage} alt="types" />
                           </div>
                            <div className='right-part'>
                            <h1>this is recommended</h1>
                            <p>recommended detail</p>
                            </div>
                            
                            
                        </div>
                    }
                </div>
                <div ref={tastes} className={`tastes-main vh-100 d-flex ${tastesVisible ? "animate" : ""}`}>
                    {
                        tastesVisible && 
                        <div className='section'>
                            <div className='left-part'>
                            <img src={tastesImage} alt="types" />
                           </div>
                            <div className='right-part'>
                            <h1>this is tastes</h1>
                            <p>tastes detail</p>
                            </div>
                            
                        </div>
                    }
                
                </div>
            </div>
        </>
     );
}
 
export default Main ;