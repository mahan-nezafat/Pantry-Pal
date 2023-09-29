import { connectUser } from "../services/apiMealPlaner";
import { insertUser } from "../services/dataBaseApis";
import { loginUser, setLoggedIn } from "../features/auth/authSlice";
import { filterUser } from "../services/dataBaseApis";
import { randomNumber } from "./randomNumber";

export  const handleLogin = async (e, email, password, dispatch) => {
    e.preventDefault();
    const data = await filterUser(email, password)
    if(!data) return
    dispatch(loginUser(data))
    dispatch(setLoggedIn(true));
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