import React from 'react';

const Food = ({ selectedFoodInformation, dispatch }) => {

    const {
        analyzedInstructions,
        diets,
        dishTypes,
        extendedIngredients,
        image,
        instructions,
        pricePerServing,
        readyInMinutes,
        summary,
        vegan,
        winePairing,
        title,
        imageType,
        id
    } = selectedFoodInformation;
    console.log(Object.values(selectedFoodInformation).length)
    return (
        <>
            <div className='food'>
                        {/* <button className='close-btn' onClick={() => dispatch({type: "Close", payload: false})}>&times;</button> */}
                        <h1>{title}</h1>
                        <div className='upper-part'>
                            <div className='food-image'>
                                <img src={`https://spoonacular.com/recipeImages/${id}-636x393.${imageType}`} alt="food" />
                            </div>
                            <div className="ingredients">
                                <ul>
                                    <h4>Ingredients:</h4>
                                    {
                                        extendedIngredients.map((ingredient, index) => {
                                            return <li><img src={`https://spoonacular.com/cdn/ingredients_500x500/${ingredient.image}`} alt="ingredient" /> <span>{ingredient.nameClean}</span></li>
                                        })
                                    }
                                </ul>    
                                
                            </div>
                        </div>
                        

                        <div className="lower-part">
                            <h4>Estimated Price: ${Math.floor(pricePerServing)}</h4>
                            <h4>Estimated Time: {readyInMinutes < 60 ? `${readyInMinutes}min` : `${Math.floor(readyInMinutes / 60)} hours`}</h4>
                            <h4>Vegan: {vegan ? "yes" : "no"}</h4>
                            <div className="diets">
                                {diets.length > 0 && <h4>Diets: </h4>} 
                                
                                {diets && 
                                
                                diets.map((diet, index) => <span>{diet}</span>)
                                }   

                            </div>
                            <div className="dish-types">
                                {
                                    dishTypes.length > 0 && <h4>Dish Types:</h4>
                                }
                                {
                                    dishTypes && dishTypes.map((dishType, index) => <span>{dishType}</span>)
                                }
                            </div>
                            
                            <div className="instructions">
                                    <h4>Instructions:</h4>
                                    <ul>
                                        { analyzedInstructions &&  Object.values(analyzedInstructions)[0].steps.map((item, index) => {
                                            return <li><p>{index + 1}-{item.step}</p></li>
                                        })}
                                    </ul>
                            </div>
                            
                        </div>
                                        
                       
                        
            </div>
        </>
    );
}
 
export default Food;