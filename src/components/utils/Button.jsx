import React from "react";

const Button = ({ children, type, handleClick }) => {


    const classTypes = {
        default: "border-[1px] border-black p-1 px-3 rounded",
        panel: " border-black p-1 px-3",
        like: "mx-2  text-red-500 fill-green-500 relative z-30 py-[1px] px-[8px] rounded-[50%]",
    }

    return(
        <>
            <button onClick={handleClick} className={classTypes[type]}>{children}</button>
        </>
    );
}

export default Button;