import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MealPlaner = () => {
    const {isLoggedIn} = useSelector(store => store.auth);
    const navigate = useNavigate()
    useEffect(() => {
        if(isLoggedIn) {
            navigate('/userpanel');
        }else {
            navigate('/login');
        }
    },[isLoggedIn])
    return (
        <>
            {/* <h1>This is Meal Planer</h1> */}
        </>
    )
}

export default MealPlaner;