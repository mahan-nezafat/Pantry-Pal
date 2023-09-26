import { loginUser } from "../features/auth/authSlice";
import { filterUser } from "../services/dataBaseApis";
import { randomNumber } from "./randomNumber";

export const handleLogin = async (e, email, password, dispatch) => {
    e.preventDefault();
    const data = await filterUser(email, password)
    if(!data) return
    dispatch(data)
    console.log(data)
}