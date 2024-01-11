import React from "react";

const Button = ({ children, type, handleClick }) => {


    const classTypes = {
        default: "border-[1px] border-black p-1 px-3 rounded mx-2",
        panel: " border-black p-1 px-3",
        like: "mx-2  text-red-500 relative z-30 py-[1px] px-[8px] rounded-[50%] text-center w-full h-full flex items-center",
        delete: "text-red-500 border-[1px] border-black p-1 px-3 rounded"
    }

    return(
        <>
            <button onClick={handleClick} className={classTypes[type]}>{children}</button>
        </>
    );
}

export default Button;