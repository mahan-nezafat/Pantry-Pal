import React from 'react';
import RecipeItem from './RecipeItem';
import { useHome } from '../../contexts/HomeProvider';

const RecipeList = () => {
    const { results, searchQuery, bulkData } = useHome();
    
    return ( 
        <>
            <div className={"recipe-list"}>
                { typeof results !== "undefined" ?
                    Object.values(results).map((item, index) => {
                        return <RecipeItem item={item} key={item.id} fullInfo={bulkData[index]}/>
                    })
                    :
                    ""
                }
            </div>
        </>
    );
}
 
export default RecipeList;