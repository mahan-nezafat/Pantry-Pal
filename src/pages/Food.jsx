import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { closeFood } from "../features/food/foodSlice";
import Header from "../components/header/Header";
import { redirect, useNavigate } from "react-router-dom";
const Food = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedFoodInformation, youtubeId, isSelected, isLoading } = useSelector((state) => state.food);

  const { analyzedInstructions, diets, dishTypes, extendedIngredients, image, instructions, pricePerServing, readyInMinutes, summary, vegan, winePairing, title, imageType, id } =
    selectedFoodInformation;

  function handleClose() {
    dispatch(closeFood(false));
    navigate("/search", {replace: true});
    console.log("gg")
  }

  return (
    <>
      <Header />

      {isLoading ? (
        <>
          <div className="food my-36">
            
            <Skeleton width={50} height={20} />
            <div className="upper-part">
              <div className="food-image">
                <Skeleton width={400} height={300} />
              </div>
              <div className="food-video">
                <Skeleton width={400} height={300} />
              </div>
            </div>
            <div className="lower-part">
              <div className="ingredients">
                {extendedIngredients &&
                  extendedIngredients.map((ingredient, index) => {
                    return (
                      <div key={index}>
                        <Skeleton width={40} height={10} />
                      </div>
                    );
                  })}
              </div>
              <div className="d-flex row">
                <Skeleton width={200} height={40} />
                <Skeleton width={200} height={40} />
                <Skeleton width={200} height={40} />
              </div>
              <div className="diets">
                {diets && diets.length > 0 && <Skeleton width={50} height={20} />}

                {diets &&
                  diets.map((diet, index) => (
                    <span key={index} className="ml-5">
                      <Skeleton width={40} height={20} />
                    </span>
                  ))}
              </div>
              <div className="dish-types">
                {dishTypes && dishTypes.length > 0 && <Skeleton width={50} height={20} />}
                {dishTypes &&
                  dishTypes.map((dishType, index) => (
                    <span key={index} className="ml-5">
                      <Skeleton width={40} height={20} />
                    </span>
                  ))}
              </div>
              <div className="instructions">
                <ul>
                  <Skeleton width={50} height={20} />
                  {analyzedInstructions &&
                    Object.values(analyzedInstructions)[0].steps.map((item, index) => {
                      return (
                        <li key={index}>
                          <Skeleton width={500} height={40} />
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </>
      ) :  (
        <div className="food">
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
          <h1>{title}</h1>
          <div className="upper-part">
            <div className="food-image">
              <img src={`https://spoonacular.com/recipeImages/${id}-636x393.${imageType}`} alt="food" />
            </div>
            {youtubeId !== "" ? (
              <div className="food-video">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${youtubeId}?si=-nxhoaFiO_zVNH6H`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            ) : (
              ""
            )}
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
              <h4>
                Estimated Price: <span className="green-color">${Math.floor(pricePerServing)}</span>
              </h4>
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
                          <span>{index + 1}</span>
                          <p> {item.step}</p>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      ) }
    </>
  );
};

export default Food;
