import React from "react";

const Button = ({ children, type }) => {


    const classTypes = {
        default: "border-[1px] border-black p-1 px-3 rounded"
    }

    return(
        <>
            <button className={classTypes[type]}>{children}</button>
        </>
    );
}

export default Button;