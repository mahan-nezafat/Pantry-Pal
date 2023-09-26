import React from "react";
import { createUser } from "../../features/auth/authSlice";

const Input = ({ type, label, htmlFor, name, placeHolder, value, handler }) => {
    return(
        <div className="flex w-[90%] justify-between items-center my-4 outline-none ">
            {label && <label htmlFor={htmlFor} >{label}</label>}
            <input onChange={(e) => handler(e)} className="border-solid border-[1px] border-black rounded py-1 px-5 focus-visible:outline-none" value={value} name={name} type={type} placeholder={placeHolder} />
        </div>
    );
}

export default Input;