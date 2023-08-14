import React from 'react';

const RecipeItem = ({ item }) => {

    const {foodName, ingredients} = item;
    return (
        <>
            <div className="recipe-item">
                <h3>{foodName}</h3>
                <p>{
                
                    ingredients.map(ingredient => {
                        return <span>{ingredient}</span>
                    })
                }</p>
            </div>
        </>
    );
}
 
export default RecipeItem;