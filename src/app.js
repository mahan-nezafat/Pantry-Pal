import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loading from "./components/Loading";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "./features/util/utilSlice";
import { fetchFoodIds, fetchMealPlan } from "./services/dataBaseApis";
import { setFullName, setLoggedIn, setMealPlan } from "./features/auth/authSlice";
import { getFood, setFoodsIds } from "./features/food/foodSlice";
import { setData } from "./features/search/searchSlice";

const Home = lazy(() => import("./pages/Home"));
const Notfounded = lazy(() => import("./pages/Notfounded"));
const Search = lazy(() => import("./pages/Search"));
const Food = lazy(() => import("./pages/Food"));
const Login = lazy(() => import("./pages/Login"));
const MealPlaner = lazy(() => import("./pages/MealPlaner"));
const UserPanel = lazy(() => import("./pages/UserPanel"));
const Settings = lazy(() => import("./components/panel/Settings"));
const Favorite = lazy(() => import("./components/panel/FavoriteFoods"));

const App = () => {
  
  const dispatch = useDispatch();
  const darkMode = JSON.parse(localStorage.getItem('darkmode'))
  useEffect(() => {
      dispatch(setDarkMode(darkMode))
      

    },[darkMode, dispatch])

  useEffect(() => {
    const foodData = JSON.parse(localStorage.getItem('food'));
    dispatch(getFood(foodData));
    // const searchData = JSON.parse(localStorage.getItem('search'));
    dispatch(setData());
    // console.log(foodData.id)
  }, [dispatch])

    useEffect(() => {
      try {
        async function handleReload() {
          let ids, mealPlan, userName;
          let user = localStorage.getItem('user');
          let {userId, fullName} = JSON.parse(user);
          
         //  console.log(userId)
          let {data} = await fetchFoodIds(userId) ;
          let {mealPlanData} = await fetchMealPlan(userId);
          ids =  data[0].favorite_foods_ids.split(" ").filter(id => id !== "").map(id => Number(id));
          mealPlan = mealPlanData[0].meal_plan
          dispatch(setLoggedIn(true));
          dispatch(setFoodsIds(ids));
          dispatch(setMealPlan(mealPlan))
          dispatch(setFullName(fullName))
      }
        handleReload();
      } catch (error) {
        console.log(error)
      }
   }, [])
  
  return (
    <> 
      <BrowserRouter>
        <Suspense>
          <Routes>
            {/* <Route index element={<Navigate replace to="/" />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/food" element={<Food />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mealplaner" element={<MealPlaner />} />
            <Route path="/userpanel" element={<UserPanel />} >
              <Route path="settings" element={<Settings />} />
              <Route path="favorite" element={<Favorite />} />

            </Route>
            <Route path="*" element={<Notfounded />} />
              
          </Routes>
        </Suspense>
      </BrowserRouter>

    </>
  );
};

export default App;
