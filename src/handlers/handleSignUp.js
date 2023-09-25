import { insertUser } from "../services/dataBaseApis";

export const handleSignUp = (e, newUser) => {
    e.preventDefault();
    insertUser(newUser);

}