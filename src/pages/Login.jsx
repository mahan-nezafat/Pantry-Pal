import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Button from "../components/utils/Button";
import Input from "../components/utils/Input";
import { useDispatch, useSelector } from "react-redux";
import { setFullName, setEmail, setPassword, setLoggedIn, loginUser } from "../features/auth/authSlice";
import { randomNumber } from "../handlers/randomNumber";
import { filterUser } from "../services/dataBaseApis";
import { useNavigate } from "react-router-dom";
import { connectUser } from "../services/apiMealPlaner";
import { handleLogin, handleSignUp } from "../handlers/authHandlers";
const Login = () => {
    const { isLoggedIn, fullName, email, password } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signUp, setSignUp] = useState(false);
    
    useEffect(() => {
        if(isLoggedIn) navigate('/userpanel');
        // navigate(-1)

    },[isLoggedIn])

    const newUser = {
        id: randomNumber(), 
        created_at: new Date,
        full_name: fullName,
        email,
        password,
        admin: false
    }
        
   
    return (
        <>
            <Header />

            <div className="flex flex-col justify-center w-[30%] h-[400px] mx-auto py-10 rounded shadow-lg items-center border-[1px] border-black mt-40 ">
                <h1>{signUp ? "LogIn Form" : "SignUp Form"}</h1>
                <form onSubmit={(e) => signUp ? handleLogin(e, email, password, dispatch) : handleSignUp(e, newUser, dispatch)}  className="flex flex-col justify-center items-center w-full">
                    {!signUp && 
                        <Input  handler={(e) => dispatch(setFullName(e.target.value))} value={fullName} label="Full Name" htmlFor="full-name" name="full-name" type="text" placeHolder="Enter your full name"/>
                    }
                    <Input handler={(e) => dispatch(setEmail(e.target.value)) } value={email} label="Email" htmlFor="email" name="email" type="email" placeHolder="Enter your email address" />
                    <Input handler={(e) => dispatch(setPassword(e.target.value)) } value={password} label="Password" htmlFor="password" name="password" type="password" placeHolder="Enter your password" />
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