import React from "react";
import { useHome } from "../../contexts/HomeProvider";

const Food = () => {
  const { selectedFoodInformation, dispatch } = useHome();

  const { analyzedInstructions, diets, dishTypes, extendedIngredients, image, instructions, pricePerServing, readyInMinutes, summary, vegan, winePairing, title, imageType, id } =
    selectedFoodInformation;

  // console.log(Object.values(selectedFoodInformation).length)
  return (
    <>
      {selectedFoodInformation.length > 0 ? (
        <div className="food">
          <button className="close-btn" onClick={() => dispatch({ type: "Close", payload: false })}>
            &times;
          </button>
          <div className="upper-part">
            <h1>{title}</h1>
            <div className="food-image">
              <img src={`https://spoonacular.com/recipeImages/${id}-636x393.${imageType}`} alt="food" />
            </div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/81bn4p8H3Kg?si=-nxhoaFiO_zVNH6H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            {/* <h4>Ingredients:</h4> */}
            <div className="ingredients">
              {extendedIngredients &&
                extendedIngredients.map((ingredient, index) => {
                  return (
                    <p key={index}>
                      <img src={`https://spoonacular.com/cdn/ingredients_500x500/${ingredient.image}`} alt="ingredient" /> <span>{ingredient.nameClean}</span>
                    </p>
                  );
                })}
            </div>
          </div>

          <div className="lower-part">
            <h4>Estimated Price: ${Math.floor(pricePerServing)}</h4>
            <h4>Estimated Time: {readyInMinutes < 60 ? `${readyInMinutes}min` : `${Math.floor(readyInMinutes / 60)} hours`}</h4>
            <h4>Vegan: {vegan ? "yes" : "no"}</h4>
            <div className="diets d-flex">
              {diets && diets.length > 0 && <h4>Diets: </h4>}

              {diets &&
                diets.map((diet, index) => (
                  <span key={index} className="ml-5">
                    {diet},
                  </span>
                ))}
            </div>
            <div className="dish-types d-flex">
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
                        <p>
                          {index + 1}-{item.step}
                        </p>
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
