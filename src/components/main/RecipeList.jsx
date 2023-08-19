import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ results, bulkData, dispatch }) => {

    return ( 
        <>
            <div className="recipe-list">
                { typeof results !== "undefined" ?
                    Object.values(results).map((item, index) => {
                        return <RecipeItem item={item} key={item.id} fullInfo={bulkData[index]} dispatch={dispatch} />
                    })
                    :
                    ""
                }
            </div>
        </>
    );
}
 
export default RecipeList;