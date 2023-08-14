import React from 'react';
import Hero from './Hero';
import RecipeList from './RecipeList';

const Main = () => {
    return ( 
        <>
            <div className="main">
                <RecipeList />  
                <Hero />
            </div>
        </>
     );
}
 
export default Main ;