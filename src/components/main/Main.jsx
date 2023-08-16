import React from 'react';
import Hero from './Hero';
import RecipeList from './RecipeList';

const Main = ({ dispatch, searchQuery, results, bulkData }) => {
    return ( 
        <>
            <div className="main">
                <RecipeList results={results} bulkData={bulkData} />  
                <Hero dispatch={dispatch} searchQuery={searchQuery} />
            </div>
        </>
     );
}
 
export default Main ;