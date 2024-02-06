import React from 'react';

const Hamburger = ({fill, stroke}) => {
    return ( 
        <>
            {/* <?xml version="1.0" encoding="utf-8"?> */}


            <svg width="30px" height="30px" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_429_11066)">
            <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" fill={fill} stroke={stroke} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_429_11066">
            <rect width="24" height="24" fill={fill} transform="translate(0 0.000915527)"/>
            </clipPath>
            </defs>
            </svg>

        </>
     );
}
 
export default Hamburger;