import React from "react";

const Button = ({ children, type, handleClick }) => {


    const classTypes = {
        default: "border-[1px] border-amber-900 dark p-1 px-3 rounded mx-2 dark:text-amber-400 text-amber-900",
        panel: " p-1 px-3 border-amber-900",
        like: "mx-2  text-red-500 relative z-30 py-[1px] px-[8px] rounded-[50%] text-center w-[10%] flex items-center",
        delete: "text-red-500 border-[1px] p-1 px-3 rounded border-amber-900"
    }

    return(
        <>
            <button onClick={handleClick} className={classTypes[type]}>{children}</button>
        </>
    );
}

export default Button;