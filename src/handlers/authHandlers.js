import { connectUser } from "../services/apiMealPlaner";
import { fetchFoodIds, insertUser, updateFoodIds } from "../services/dataBaseApis";
import { loginUser, setLoggedIn, setMealPlan } from "../features/auth/authSlice";
import { filterUser } from "../services/dataBaseApis";
import { randomNumber } from "./randomNumber";
import { setFoodsIds } from "../features/food/foodSlice";

export  const handleLogin = async (e, email, password, dispatch) => {
    e.preventDefault();
    let data;
    let ids;
    let mealPlan;
    try {
        data = await filterUser(email, password)
        ids =  data === null ? [] : data[0].favorite_foods_ids.split(" ").filter(id => id !== "").map(id => Number(id));
        mealPlan = data === null ? {} : data[0].meal_plan
        console.log(ids)
    } catch (error) {
        console.log(error)
    }
    if(!data) return
    dispatch(loginUser(data))
    dispatch(setLoggedIn(true));
    dispatch(setFoodsIds(ids));
    dispatch(setMealPlan(mealPlan))
}       

export const handleSignUp = async (e, user, dispatch) => {
    e.preventDefault();
    
    
    try {
        const {hash, spoonacularPassword, username} = await connectUser({username: user.fullName, email: user.email});
        const newUser = {
            ...user,
            hash: hash,
            spoonacular_username: username,
            spoonacular_password: spoonacularPassword
        }

        const {data, error} = await insertUser(newUser)
        console.log(data)
        dispatch(loginUser(data))
        dispatch(setLoggedIn(true));
    } catch (error) {
        console.log(error)
    }
    
}