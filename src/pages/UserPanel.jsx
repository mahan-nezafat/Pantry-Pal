import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Button from "../components/utils/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MealPlaner from "../components/panel/MealPlaner";
import FavoriteFoods from "../components/panel/FavoriteFoods";
import Settings from "../components/panel/Settings";
import { getBulkFood, setFoodsIds, clearAllFood } from "../features/food/foodSlice";
import { setIsLoading, clearAllSearch } from "../features/search/searchSlice";
import { setLoggedIn, setId, setMealPlan, clearAllAuth, setFullName } from "../features/auth/authSlice";
import { fetchFoodIds, fetchMealPlan } from "../services/dataBaseApis";
import toast, { Toaster } from 'react-hot-toast';
import { handleHotToast } from "../handlers/handleHotToast";
import { clear } from "@testing-library/user-event/dist/clear";

const UserPanel = () => {
    const {isLoggedIn, id, email, password, fullName} = useSelector(store => store.auth);
    const {favFoodsIds} = useSelector(store => store.food);
    const {isLoading} = useSelector(store => store.search);
    let userCredintials = {email, password, id};

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [panelContent, setPanelContent] = useState("mealplaner");

    function logOut() {
        dispatch(clearAllAuth());
        dispatch(clearAllFood());
        dispatch(clearAllSearch());
        dispatch(setLoggedIn(false));
        navigate("/login");
    }

    function handleData() {
            
        dispatch(getBulkFood(favFoodsIds));
        dispatch(setIsLoading(true));
        setTimeout(() => {
            dispatch(setIsLoading(false));
            
        }, 2000)     
    }

   

    
    useEffect(() => {
       async function handleReload() {
        let ids, mealPlan, userName;
        let user = localStorage.getItem('user');
        let {userId, fullName} = JSON.parse(user);
        
        console.log(userId)
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
    }, [])



    return (
        <>
                <Header />
            <div className="flex flex-col w-full h-[80%]">
                <h1 className="ml-2 text-2xl mb-2 w-full text-center">Welcome to your panel {fullName}!</h1>
                <div className="flex w-full h-full justify-end items-center relative">
                    <div className="w-[10%] h-[85%] justify-center items-center flex flex-col pl-4 fixed left-[0%] bottom-[2%]">
                        <ul className="w-full">
                            <Link to='/userpanel' onClick={() => setPanelContent("mealplaner")} className="rounded py-1 mb-5 flex justify-center items-center border-[1px] border-solid border-black cursor-pointer"><Button type="panel" >Meal Planer</Button></Link>
                            <Link to='favorite' onClick={() =>{ setPanelContent("favoritefoods"); handleData()}} className="rounded py-1 mb-5 flex justify-center items-center border-[1px] border-solid border-black cursor-pointer"><Button  type="panel" >Favorite Foods</Button></Link>
                            <Link to='settings' onClick={() => setPanelContent("settings")} className="rounded py-1 mb-5 flex justify-center items-center border-[1px] border-solid border-black cursor-pointer"><Button  type="panel" >Settings</Button></Link>
                            <Link to='/login' onClick={logOut}  className="rounded py-1 mb-5 flex justify-center items-center border-[1px] border-solid border-black cursor-pointer">
                                <Button type="panel"><span className="text-red-500">Log Out</span></Button>
                            </Link>
                        </ul>
                    </div>
                    <div className={`w-[90%] h-full flex justify-center items-center`}>
                        {
                            panelContent === "mealplaner" && <MealPlaner handleHotToast={handleHotToast} />
                        }
                        
                        {
                            panelContent === "favoritefoods" && <FavoriteFoods handleData={handleData}  />
                        }
                        {
                            panelContent === "settings" && <Settings  handleHotToast={handleHotToast} />
                        } 
                            
                    </div>
                </div>
                <Toaster />   
                
            </div>
        </>
    );
}

export default UserPanel;
