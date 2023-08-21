import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ results, bulkData, dispatch, isSubmit,  searchQuery }) => {

    return ( 
        <>
            <div className={`recipe-list ${searchQuery ? "w-20" : ""}`}>
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