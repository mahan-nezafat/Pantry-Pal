import React from "react";

const Input = ({ type, label, htmlFor, name, placeHolder, value, handleChange, setchange}) => {
    return(
        <div className="flex w-[90%] justify-between items-center my-4">
            {label && <label htmlFor={htmlFor} >{label}</label>}
            <input onChange={(e) => handleChange(e, setchange)} className="border-solid border-[1px] border-black rounded py-1 px-5 " value={value} name={name} type={type} placeholder={placeHolder} />
        </div>
    );
}

export default Input;