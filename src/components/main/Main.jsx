import React from 'react';
import Hero from './Hero';
import RecipeList from './RecipeList';

const Main = ({ dispatch, searchQuery, results, bulkData, selectedFoodInformation, isSelected, isSubmit }) => {
    return ( 
        <>
            <div className="main">
                <RecipeList isSubmit={isSubmit} results={results} bulkData={bulkData} dispatch={dispatch}  searchQuery={searchQuery} />  
                <Hero isSubmit={isSubmit} dispatch={dispatch} searchQuery={searchQuery} selectedFoodInformation={selectedFoodInformation} isSelected={isSelected} />
            </div>
        </>
     );
}
 
export default Main ;