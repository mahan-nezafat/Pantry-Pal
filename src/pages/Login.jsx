import React, { useState } from "react";
import Header from "../components/header/Header";
import Button from "../components/utils/Button";
import Input from "../components/utils/Input";
import { deleteUser, fetchUsers, insertUser, updateUser } from "../services/dataBaseApis";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
    const { isLoggedIn, fullName, email, password } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const [signUp, setSignUp] = useState(false);
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    function handleSignUp(e) {
        e.preventDefault();
        const newUser = {
            id: 12345, 
            created_at: new Date,
            full_name: name,
            email,
            password,
            admin: false};
        console.log("signup")

    }

    function handleLogin(e) {
        e.preventDefault();
        console.log("login")
    }

    function handleChange(value, setChange) {
        setChange(value)
    }

    return (
        <>
            <Header />

            <div className="flex flex-col justify-center w-[30%] h-[400px] mx-auto py-10 rounded shadow-lg items-center border-[1px] border-black my-40">
                <h1>{signUp ? "LogIn Form" : "SignUp Form"}</h1>
                <form action="" onSubmit={signUp ? handleLogin : handleSignUp}  className="flex flex-col justify-center items-center w-full">
                    {!signUp && 
                        <Input handleChange={(e) => handleChange(e.target.value, setName)} value={fullName} label="Full Name" htmlFor="full-name" name="full-name" type="text" placeHolder="Enter your full name"/>
                    }
                    <Input handleChange={(e) => handleChange(e.target.value, setEmail)} value={email} label="Email" htmlFor="email" name="email" type="email" placeHolder="Enter your email address" />
                    <Input handleChange={(e) => handleChange(e.target.value, setPassword)} value={password} label="Password" htmlFor="password" name="password" type="password" placeHolder="Enter your password" />
                    <Button type="default" >{signUp ? "Log In" : "Sign Up"}</Button>
                    <p className="mt-4 cursor-pointer" onClick={() => setSignUp(!signUp)}>{signUp ?
                        <span>
                            have'nt signed up yet? <span className="text-green-500">sign up now</span>
                        </span>
                            :
                        <span>

                            have an account? <span className="text-green-500">Log in</span>
                        </span>
                    }</p>
                </form>
            </div>
        </>
    )
}

export default Login;