import { current } from '@reduxjs/toolkit';
import React from 'react';

const ChevronDown = ({fillColor, strokeColor, className, width, height}) => {
    return ( 
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className={`bi bi-chevron-down ${className}` } viewBox="0 0 16 16">
                <path fill={fillColor} stroke={strokeColor}  fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
        </>
     );
}
 
export default ChevronDown;