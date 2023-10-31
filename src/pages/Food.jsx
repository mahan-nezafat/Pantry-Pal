import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { addFavFoodsIds, closeFood, removeFavFoodsIds } from "../features/food/foodSlice";
import Header from "../components/header/Header";
import { redirect, useNavigate } from "react-router-dom";
import Button from "../components/utils/Button";
import { updateFoodIds } from "../services/dataBaseApis";
const Food = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);    
  
  const {id: userId, isLoggedIn} = useSelector(store => store.auth);
  const { selectedFoodInformation, favFoodsIds, youtubeId, isSelected, isLoading } = useSelector((store) => store.food);

  const { analyzedInstructions, diets, dishTypes, extendedIngredients, image, instructions, pricePerServing, readyInMinutes, summary, vegan, winePairing, title, imageType, id } =
    selectedFoodInformation;

  function handleClose() {
    dispatch(closeFood(false));
    navigate(-1)
  }


  function handleLike() {
    if(!isLoggedIn) return navigate("/login");
    
    setIsLiked(!isLiked);
    if(isLiked) {
        dispatch(removeFavFoodsIds(id));
        
    }else {
        dispatch(addFavFoodsIds(id));   
    }        
  }

  useEffect(() => {
      if(!isLoggedIn) return;

      let foodIds = favFoodsIds.join(" ")
      updateFoodIds(userId, foodIds)

  }, [isLiked, favFoodsIds]);
  useEffect(() => {
      favFoodsIds.map(userId => {
          if(Number(userId) === id) { 
              setIsLiked(true)
              console.log("true")
          }
      })
  }, [isSelected])



  return (
    <>
      <Header />

      {isLoading ? (
        <>
          <div className="flex w-[80%] my-[40px] mx-auto flex-col pl-[10px]">
            <button className="w-[5%] bg-black text-white outline-none p-[5px] rounded my-[5px] mx-0" onClick={handleClose}>
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <Skeleton width={50} height={20} />
            <div className="flex justify-between items-center">
              <div className="w-[48%] h-full flex justify-center">
                <Skeleton width={400} height={300} />
              </div>
              <div className="w-[48%] h-full flex justify-center">
                <Skeleton width={400} height={300} />
              </div>
            </div>
            <div className="w-[90%] h-full flex  justify-start items-center flex-wrap">
              <div >
                {extendedIngredients &&
                  extendedIngredients.map((ingredient, index) => {
                    return (
                      <div className="flex w-[25%] my-[14px] mx-0 items-center justify-start" key={index}>
                        <Skeleton width={40} height={10} />
                        <Skeleton width={50} height={5} />
                      </div>
                    );
                  })}
              </div>
              <div className="flex justify-around w-full items-center">
                <Skeleton width={200} height={40} />
                <Skeleton width={200} height={40} />
                <Skeleton width={200} height={40} />
              </div>
              <div className="flex my-[30px] mx-0">
                {diets && diets.length > 0 && <Skeleton width={50} height={20} />}

                {diets &&
                  diets.map((diet, index) => (
                    <span key={index} className="ml-5">
                      <Skeleton width={40} height={20} />
                    </span>
                  ))}
              </div>
              <div className="flex my-[30px] mx-0">
                {dishTypes && dishTypes.length > 0 && <Skeleton width={50} height={20} />}
                {dishTypes &&
                  dishTypes.map((dishType, index) => (
                    <span key={index} className="ml-5">
                      <Skeleton width={40} height={20} />
                    </span>
                  ))}
              </div>
              <div className="flex flex-col">
                <ul>
                  <Skeleton width={50} height={20} />
                  {analyzedInstructions &&
                    Object.values(analyzedInstructions)[0].steps.map((item, index) => {
                      return (
                        <li className="w-full inline-block" key={index}>
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
        <div className="flex w-[80%] my-[40px] mx-auto flex-col pl-[10px]">
          <div className="flex justify-start items-center">
          <button className="w-[5%] bg-black text-white outline-none p-[5px] rounded my-[5px] mx-0" onClick={handleClose}>
          <i class="fa-solid fa-arrow-left"></i>
          </button>
          {/* <Button type="like" handleClick={handleLike} >
                        { isLiked ? 
                            <i className={`fa-solid fa-heart absolute text-4xl`}></i>
                            :
                            <i className={`fa-regular fa-heart absolute text-4xl `}></i>
                        }
          </Button> */}
          </div>
          <h1 className="font-[1.2rem] my-[10px] mx-0" >{title}</h1>
          <div className="flex justify-between items-center">
            <div className="w-[48%] h-full flex justify-center">
              <img className="w-full h-full rounded-lg" src={`https://spoonacular.com/recipeImages/${id}-636x393.${imageType}`} alt="food" />
            </div>
            {youtubeId !== "" ? (
              <div className="w-[48%] h-full flex justify-center">
                <iframe className="rounded-lg"
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

          <div >
            <div className="w-[90%] h-full flex  justify-start items-center flex-wrap">
              {extendedIngredients &&
                extendedIngredients.map((ingredient, index) => {
                  return (
                    <div className="flex w-[25%] my-[14px] mx-0 items-center justify-start" key={index}>
                      <img className="w-[15%] my-0 mx-[4px] rounded-lg h-auto" src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt="ingredient" /> <span className="font-[0.8rem]">{ingredient.nameClean}</span>
                    </div>
                  );
                })}
            </div>
            <div className="flex justify-around">
              <h4 className="border-[1px] border-black border-solid p-[10px] rounded text-black">
                Estimated Price: <span className="text-green-500">${Math.floor(pricePerServing)}</span>
              </h4>
              <h4 className="border-[1px] border-black border-solid p-[10px] rounded text-black">Estimated Time: {readyInMinutes < 60 ? `${readyInMinutes}min` : `${Math.floor(readyInMinutes / 60)} hours`}</h4>
              <h4 className="border-[1px] border-black border-solid p-[10px] rounded text-black">Vegan: {vegan ? <span className="text-green-500">yes</span> : <span className="text-red-500">No</span>}</h4>
            </div>
            <div className="flex my-[30px] mx-0">
              {diets && diets.length > 0 && <h4 className="border-b-2 border-b-red-500">Diets: </h4>}

              {diets &&
                diets.map((diet, index) => (
                  <span key={index} className="ml-[5px]">
                    {diet},
                  </span>
                ))}
            </div>
            <div className="flex my-[30px] mx-0">
              {dishTypes && dishTypes.length > 0 && <h4 className="border-b-2 border-b-red-500">Dish Types:</h4>}
              {dishTypes &&
                dishTypes.map((dishType, index) => (
                  <span key={index} className="ml-[5px]">
                    {dishType},
                  </span>
                ))}
            </div>

            <div className="flex flex-col ">
              <ul>
                <h4>Instructions:</h4>
                {analyzedInstructions &&
                  Object.values(analyzedInstructions)[0].steps.map((item, index) => {
                    return (
                      <li className="w-full inline-block" key={index}>
                        <div className="flex justify-start items-center m-[12px]">
                          <span className="text-white bg-black py-[5px] px-[8px] rounded-[50%] mr-[4px]">{index + 1}</span>
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
