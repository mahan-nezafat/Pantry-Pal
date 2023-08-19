import React from 'react';
import Hero from './Hero';
import RecipeList from './RecipeList';

const Main = ({ dispatch, searchQuery, results, bulkData, selectedFoodInformation, isSelected }) => {
    return ( 
        <>
            <div className="main">
                <RecipeList results={results} bulkData={bulkData} dispatch={dispatch} />  
                <Hero dispatch={dispatch} searchQuery={searchQuery} selectedFoodInformation={selectedFoodInformation} isSelected={isSelected} />
            </div>
        </>
     );
}
 
export default Main ;