import React from 'react';

const RecipeItem = ({ item }) => {

    const {title, image } = item
    console.log(title, image);
    return (
        <>
            <div className="recipe-item">
                <h3>{title}</h3>
                <img src={image} alt="food" />
                {/* <p>{
                
                    ingredients.map(ingredient => {
                        return <span>{ingredient}</span>
                    })
                }</p> */}
            </div>
        </>
    );
}
 
export default RecipeItem;