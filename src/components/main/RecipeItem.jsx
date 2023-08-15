import React from 'react';

const RecipeItem = ({ item }) => {

    const {title, image } = item
    // console.log(title, image);
    return (
        <>
            <div className="recipe-item">
                <div className="details">
                    <h3>{title}</h3>
                </div>
                <div className="image">
                    <img src={image} alt="food" />

                </div>
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