import React from 'react';
import Food from '../components/main/Food';
import RecipeList from '../components/main/RecipeList';
import { useHome } from '../contexts/HomeProvider';
import Header from '../components/header/Header';

const Search = () => {


    const { dispatch, searchQuery, isSelected } = useHome();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: "Submit", payload: true});
    }
    
    
    function handleChange(e) {
       
        dispatch({type: "Search", payload: e.target.value});

    }

    return (
        <>
            <Header />

           <div className="search">
                <div className='query-search'>
                            <form onSubmit={handleSubmit}>
                                <input value={searchQuery} onChange={handleChange} type="text" placeholder='Enter your query...' />
                                <button>Search</button>
                            </form>
                            {/* <button className='show-ingredients' onClick={() => dispatch({type: "Show", payload: true})}>Show ingredients</button> */}
                
                </div>
           </div>
            <RecipeList />
            <Food />            
        </>
    );
}
 
export default Search;