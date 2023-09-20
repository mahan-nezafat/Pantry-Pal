import React, { useState } from "react";
import Header from "../components/header/Header";
import Button from "../components/utils/Button";
import Input from "../components/utils/Input";

const Login = () => {

    const [signIn, setSignIn] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(name, email, password);
        if(signIn){
            const user = {email, password};
            console.log(user);
            
        }else{

            const newUser = {name, email, password};
            console.log(newUser);
        }
    }

    function handleChange(value, setChange) {
        setChange(value)
    }

    return (
        <>
            <Header />

            <div className="flex flex-col justify-center w-[30%] h-[400px] mx-auto py-10 rounded shadow-lg items-center border-[1px] border-black my-40">
                <h1>{signIn ? "LogIn Form" : "SignUp Form"}</h1>
                <form onSubmit={handleSubmit} action="" className="flex flex-col justify-center items-center w-full">
                    {!signIn && 
                        <Input handleChange={(e) => handleChange(e.target.value, setName)} value={name} label="Full Name" htmlFor="full-name" name="full-name" type="text" placeHolder="Enter your full name"/>
                    }
                    <Input handleChange={(e) => handleChange(e.target.value, setEmail)} value={email} label="Email" htmlFor="email" name="email" type="email" placeHolder="Enter your email address" />
                    <Input handleChange={(e) => handleChange(e.target.value, setPassword)} value={password} label="Password" htmlFor="password" name="password" type="password" placeHolder="Enter your password" />
                    <Button type="default" >{signIn ? "Log In" : "Sign Up"}</Button>
                    <p className="mt-4 cursor-pointer" onClick={() => setSignIn(!signIn)}>{signIn ?
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