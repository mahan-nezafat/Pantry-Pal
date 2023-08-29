import React from 'react';
import RecipeItem from './RecipeItem';
import { useHome } from '../../contexts/HomeProvider';

const RecipeList = () => {
    const { results, searchQuery, bulkData, isSelected } = useHome();
    
    return ( 
        <>
           { !isSelected ?
                 <div className={"recipe-list"}>
                    { typeof results !== "undefined" ?
                        Object.values(results).map((item, index) => {
                            return <RecipeItem item={item} key={item.id} fullInfo={bulkData[index]}/>
                        })
                        :
                        ""
                    }
                </div>
                :
                ""
           }
        </>
    );
}
 
export default RecipeList;