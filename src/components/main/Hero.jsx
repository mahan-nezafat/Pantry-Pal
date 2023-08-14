import React from 'react';

const Hero = () => {
    return ( 
        <>
            <div className="hero">
                <form >
                    <input type="text" placeholder='Enter your query...' />
                    <button>Search</button>
                </form>
            </div>
        </>
    );
}
 
export default Hero;