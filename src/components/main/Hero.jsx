import React from 'react';
import Food from './Food';
import { useHome } from '../../contexts/HomeProvider';
import Header from '../header/Header';
import chevronDown from "../../assets/images/chevron-down.svg"
const Hero = () => {

    

    return ( 
        <>
          
             

                    <div className='hero'>
                        <Header />
                        
                        <div className="hero-title d-flex">
                            <h2>Discover Delicious Recipes</h2>
                            <h1>At Pantry Pal</h1>
                        </div>

                        <div className="more-info d-flex">
                            <span>scroll down to find out more</span>
                            <img src={chevronDown} alt="chevron-down" />
                        </div>
                        
                    </div>

        </>
    );
}
 
export default Hero;