import React from "react";

const Item = ({ children }) => {

    const itemClass = " max-md:py-10  max-md:w-full  max-md:flex  max-md:justify-center  max-md:items-center inline-block mx-2 relative cursor-pointer rounded z-0 after:content-[' '] after:z-[-1] after:w-[0%] after:h-[28px] after:absolute after:left-0 after:bg-amber-900 after:dark:bg-amber-800 after:bottom-0 after:transition-all after:rounded after:duration-[0.4s] hover:after:w-[100%]  max-md:hover:after:w-[0%]";

    return (
        <>
            <li className = {itemClass}>
                {children}
            </li>
        </>
    )
}

export default Item;