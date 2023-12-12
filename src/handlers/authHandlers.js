import { connectUser } from "../services/apiMealPlaner";
import { fetchFoodIds, insertUser, updateFoodIds } from "../services/dataBaseApis";
import { loginUser, setLoggedIn, setMealPlan } from "../features/auth/authSlice";
import { filterUser } from "../services/dataBaseApis";
import { randomNumber } from "./randomNumber";
import { setFoodsIds } from "../features/food/foodSlice";
import { handleHotToast } from "./handleHotToast";

export  const handleLogin = async (e, email, password, dispatch) => {
    e.preventDefault();
    let data, ids, mealPlan, userId;
    let loadingData = filterUser(email, password).then(data => data);
    handleHotToast('promise', {loading: 'Logging you in', success: 'Login was successful', error: 'could not login'}, loadingData)

    try {
        data = await filterUser(email, password)
        ids =  data === null ? [] : data[0].favorite_foods_ids.split(" ").filter(id => id !== "").map(id => Number(id));
        // mealPlan = data === null ? {} :
        if(data !== null) mealPlan = data[0].meal_plan;
        else mealPlan = null
    } catch (error) {
        console.log(error)
    }
    if(!data) return

    userId = Object.assign(data[0]).id
    localStorage.setItem('user', JSON.stringify({userId, email}))
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
        let loadingData = insertUser(newUser).then(data => data);
        handleHotToast('promise', {loading: 'Signin you up', success: 'Sign up was successful', error: 'could not sign up'}, loadingData)


        const {data, error} = await insertUser(newUser)
        dispatch(loginUser(data))
        dispatch(setLoggedIn(true));
    } catch (error) {
        console.log(error)
    }
    
}