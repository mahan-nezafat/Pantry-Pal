import { loginUser, setLoggedIn } from "../features/auth/authSlice";
import { filterUser } from "../services/dataBaseApis";
import { randomNumber } from "./randomNumber";

export  const handleLogin = async (e, email, password, dispatch) => {
    e.preventDefault();
   try {
    const data = await filterUser(email, password)
    if(!data) return
    dispatch(loginUser(data))
    dispatch(setLoggedIn(true));
   } catch (error) {
    console.log(error)
   }
}       
