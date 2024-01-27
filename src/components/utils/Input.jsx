import React from "react";
import { createUser } from "../../features/auth/authSlice";

const Input = ({ type, label, htmlFor, name, placeHolder, value, handler }) => {
    return(
        <div className="flex w-[95%] justify-between items-start my-4 outline-none flex-col dark:text-amber-400 text-amber-900 bg-transparent ">
            {label && <label className="text-base whitespace-nowrap" htmlFor={htmlFor} >{label}</label>}
            <input onChange={(e) => handler(e)} className="w-[100%] dark:text-amber-400 border-solid border-[1px] border-amber-900 text-amber-900 rounded py-1 px-5 focus-visible:outline-none placeholder:text-amber-900 placeholder:opacity-50 filter-none !bg-transparent" value={value} name={name} type={type} placeholder={placeHolder} />
        </div>
    );
}

export default Input;