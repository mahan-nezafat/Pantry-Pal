import React from 'react';
import Food from './Food';

const Hero = ({ dispatch, searchQuery, selectedFoodInformation, isSelected }) => {

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: "Submit", payload: true});
    }
    
    
    function handleChange(e) {

        dispatch({type: "Search", payload: e.target.value})

    }

    return ( 
        <>
           { isSelected ?
                    <Food selectedFoodInformation={selectedFoodInformation} />
                :
                

                    <div className="hero" >
                        <form onSubmit={handleSubmit}>
                            <input value={searchQuery} onChange={handleChange} type="text" placeholder='Enter your query...' />
                            <button>Search</button>
                        </form>
                        <button className='show-ingredients' onClick={() => dispatch({type: "Show", payload: true})}>Show ingredients</button>
                    </div>

           }
        </>
    );
}
 
export default Hero;