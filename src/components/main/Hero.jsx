import React from 'react';
import Food from './Food';
import { useHome } from '../../contexts/HomeProvider';

const Hero = () => {

    const { dispatch, searchQuery, isSelected } = useHome();

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: "Submit", payload: true});
    }
    
    
    function handleChange(e) {
        // if(e.target.value === "") {
        //     dispatch({ type:"Reset" });
        // }
        dispatch({type: "Search", payload: e.target.value})

        
    }

    return ( 
        <>
           { isSelected ?
                    <Food />
                :
                

                    <div className={`hero ${searchQuery ? "w-80" : ""}`} >
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