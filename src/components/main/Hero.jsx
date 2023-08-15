import React from 'react';

const Hero = ({ dispatch, searchQuery }) => {

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: "Submit", payload: true});
        
    }
    
    function handleChange(e) {

        dispatch({type: "Search", payload: e.target.value})

    }

    return ( 
        <>
            <div className="hero" >
                <form onSubmit={handleSubmit}>
                    <input value={searchQuery} onChange={handleChange} type="text" placeholder='Enter your query...' />
                    <button>Search</button>
                </form>
            </div>
        </>
    );
}
 
export default Hero;