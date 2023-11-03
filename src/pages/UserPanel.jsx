import React, { useState } from "react";
import Header from "../components/header/Header";
import Button from "../components/utils/Button";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import MealPlaner from "../components/panel/MealPlaner";
import ShoppingList from "../components/panel/ShoppingList";
import FavoriteFoods from "../components/panel/FavoriteFoods";
import Settings from "../components/panel/Settings";
import { getBulkFood } from "../features/food/foodSlice";
import { setIsLoading } from "../features/search/searchSlice";

const UserPanel = () => {
    const {isLoggedIn} = useSelector(store => store.auth);
    const {favFoodsIds} = useSelector(store => store.food);
    const {isLoading} = useSelector(store => store.search);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [panelContent, setPanelContent] = useState("mealplaner");
    function logOut() {
        dispatch(setLoggedIn(false));
        navigate(-1);
    }

    function handleData() {
            
        dispatch(getBulkFood(favFoodsIds));
        dispatch(setIsLoading(true));
        setTimeout(() => {
            dispatch(setIsLoading(false));
            
        }, 2000)     
    }

    
  

    return (
        <>
            <div className="flex flex-col w-full h-[80%]">

                <Header />
                <div className="flex w-full h-full justify-end items-center relative">
                    <div className="w-[10%] h-full justify-center items-center flex flex-col pl-4 fixed left-[0%] bottom-[2%]">
                        <ul className="w-full">
                            <li onClick={() => setPanelContent("mealplaner")} className="rounded py-1 mb-5 flex justify-center items-center border-[1px] border-solid border-black cursor-pointer"><Button type="panel" >Meal Planer</Button></li>
                            <li onClick={() =>{ setPanelContent("favoritefoods"); handleData()}} className="rounded py-1 mb-5 flex justify-center items-center border-[1px] border-solid border-black cursor-pointer"><Button  type="panel" >Favorite Foods</Button></li>
                            <li onClick={() => setPanelContent("settings")} className="rounded py-1 mb-5 flex justify-center items-center border-[1px] border-solid border-black cursor-pointer"><Button  type="panel" >Settings</Button></li>
                            <li onClick={logOut}  className="rounded py-1 mb-5 flex justify-center items-center border-[1px] border-solid border-black cursor-pointer">
                                <Button type="panel"><span className="text-red-500">Log Out</span></Button>
                            </li>
                        </ul>
                    </div>
                    <div className={`w-[90%] h-full flex justify-center items-center`}>
                        {
                            panelContent === "mealplaner" && <MealPlaner />
                        }
                        
                        {
                            panelContent === "favoritefoods" && <FavoriteFoods handleData={handleData} />
                        }
                        {
                            panelContent === "settings" && <Settings />
                        } 
                            
                    </div>
                </div>   
                
            </div>
        </>
    );
}

export default UserPanel;
