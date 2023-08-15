import React from 'react';
import Hero from './Hero';
import RecipeList from './RecipeList';

const Main = ({ dispatch, searchQuery, results }) => {
    return ( 
        <>
            <div className="main">
                <RecipeList results={results} />  
                <Hero dispatch={dispatch} searchQuery={searchQuery} />
            </div>
        </>
     );
}
 
export default Main ;