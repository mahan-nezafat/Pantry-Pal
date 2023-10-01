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

const UserPanel = () => {
    const {isLoggedIn} = useSelector(store => store.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [panelContent, setPanelContent] = useState("mealplaner");
    function logOut() {
        dispatch(setLoggedIn(false));
        navigate(-1);
    }

    return (
        <>
            <div className="flex flex-col w-full h-[100vh]">

                <Header />
                <div className="flex w-full h-full justify-center items-center">
                    <div className="w-[20%] h-full justify-center items-center flex flex-col pl-4">
                        <ul className="w-full">
                            <li onClick={() => setPanelContent("mealplaner")} className="py-1 mb-5 flex justify-center items-center border-[1px] border-solid border-black cursor-pointer"><Button type="panel" >Meal Planer</Button></li>
                            <li onClick={() => setPanelContent("shoppinglist")}  className="py-1 mb-5 flex justify-center items-center border-[1px] border-solid border-black cursor-pointer"><Button type="panel" >Shopping List</Button></li>
                            <li onClick={() => setPanelContent("favoritefoods")} className="py-1 mb-5 flex justify-center items-center border-[1px] border-solid border-black cursor-pointer"><Button  type="panel" >Favorite Foods</Button></li>
                            <li onClick={() => setPanelContent("settings")} className="py-1 mb-5 flex justify-center items-center border-[1px] border-solid border-black cursor-pointer"><Button  type="panel" >Settings</Button></li>
                            <li onClick={logOut}  className="py-1 mb-5 flex justify-center items-center border-[1px] border-solid border-black cursor-pointer">
                                <Button type="panel"><span className="text-red-500">Log Out</span></Button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[80%]">
                        {
                            panelContent === "mealplaner" && <MealPlaner />
                        }
                        {
                            panelContent === "shoppinglist" && <ShoppingList />
                        } 
                        {
                            panelContent === "favoritefoods" && <FavoriteFoods />
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
