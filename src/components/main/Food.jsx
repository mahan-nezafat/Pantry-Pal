import React from "react";
import { useHome } from "../../contexts/HomeProvider";

const Food = () => {
  const { selectedFoodInformation, dispatch, youtubeId, isSelected } = useHome();

  const { analyzedInstructions, diets, dishTypes, extendedIngredients, image, instructions, pricePerServing, readyInMinutes, summary, vegan, winePairing, title, imageType, id } =
    selectedFoodInformation;

  console.log((selectedFoodInformation))
  return (
    <>
      {isSelected ? (
        <div className="food">
          <button className="close-btn" onClick={() => dispatch({ type: "Close", payload: false })}>
            &times;
          </button>
          <h1>{title}</h1>
          <div className="upper-part">
            <div className="food-image">
              <img src={`https://spoonacular.com/recipeImages/${id}-636x393.${imageType}`} alt="food" />
            </div>
            <div className="food-video">
              <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtubeId}?si=-nxhoaFiO_zVNH6H`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            
          </div>

          <div className="lower-part">
            <div className="ingredients">
              {extendedIngredients &&
                extendedIngredients.map((ingredient, index) => {
                  return (
                    <div key={index}>
                      <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt="ingredient" /> <span>{ingredient.nameClean}</span>
                    </div>
                  );
                })}
            </div>
            <div className="d-flex row">
              <h4>Estimated Price: <span className="green-color">${Math.floor(pricePerServing)}</span></h4>
              <h4>Estimated Time: {readyInMinutes < 60 ? `${readyInMinutes}min` : `${Math.floor(readyInMinutes / 60)} hours`}</h4>
              <h4>Vegan: {vegan ? <span className="green-color">yes</span> : <span className="red-color">No</span>}</h4>
            </div>
            <div className="diets">
              {diets && diets.length > 0 && <h4>Diets: </h4>}

              {diets &&
                diets.map((diet, index) => (
                  <span key={index} className="ml-5">
                    {diet},
                  </span>
                ))}
            </div>
            <div className="dish-types">
              {dishTypes && dishTypes.length > 0 && <h4>Dish Types:</h4>}
              {dishTypes &&
                dishTypes.map((dishType, index) => (
                  <span key={index} className="ml-5">
                    {dishType},
                  </span>
                ))}
            </div>

            <div className="instructions">
              <ul>
                <h4>Instructions:</h4>
                {analyzedInstructions &&
                  Object.values(analyzedInstructions)[0].steps.map((item, index) => {
                    return (
                      <li key={index}>
                        <div className="instruction">
                          <span>{index + 1}</span><p> {item.step}</p>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      )
        :
        ""
    }
    </>
  );
};

export default Food;
