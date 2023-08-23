import React from 'react';
import { useHome } from '../../contexts/HomeProvider';

const RecipeItem = ({ item, fullInfo }) => {
    const { dispatch } = useHome();
    const {title, image } = item;
    const { extendedIngredients } = typeof fullInfo !== "undefined" ? fullInfo : 0
    
    
    
    return (
        <>
            <div className="recipe-item" onClick={() => dispatch({type: "SelectedFoodId", payload: item.id})}>
                <div className="details">
                    <h3>{title}</h3>
                    <ul>{ typeof extendedIngredients !== "undefined" ?
                
                extendedIngredients.map((ingredient, index) => {
                    
                   
                    return index < 4 ?  <li key={index}><span>{ingredient.nameClean}</span></li> : ""
                    
                })
                    :
                    ""
                }</ul>
                </div>
                <div className="image">
                    <img src={image} alt="food" />

                </div>
               
            </div>
        </>
    );
}
export default RecipeItem;