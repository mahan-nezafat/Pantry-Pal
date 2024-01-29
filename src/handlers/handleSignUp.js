import { connectUser } from "../services/apiMealPlaner";
import { insertUser } from "../services/dataBaseApis";

export const handleSignUp = async (e, user) => {
    e.preventDefault();
   try {
    const {hash, spoonacularPassword, username} = await connectUser({username: user.fullName, email: user.email});
    const newUser = {
        ...user,
        hash: hash,
        spoonacular_username: username,
        spoonacular_password: spoonacularPassword
    }
    insertUser(newUser);
   } catch (error) {
    console.log(error)
   }
    // console.log(newUser)

}