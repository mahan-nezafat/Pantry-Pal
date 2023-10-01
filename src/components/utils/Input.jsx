import React from "react";
import { createUser } from "../../features/auth/authSlice";

const Input = ({ type, label, htmlFor, name, placeHolder, value, handler }) => {
    return(
        <div className="flex w-[95%] justify-between items-center my-4 outline-none ">
            {label && <label className="text-base whitespace-nowrap" htmlFor={htmlFor} >{label}</label>}
            <input onChange={(e) => handler(e)} className="border-solid border-[1px] border-black rounded py-1 px-5 focus-visible:outline-none autofill:bg-[#fff] filter-none !bg-transparent" value={value} name={name} type={type} placeholder={placeHolder} />
        </div>
    );
}

export default Input;