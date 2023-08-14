import React from 'react';

const Item = ({ itemName }) => {
    return ( 
        <>
           <li>
                <span>{itemName}</span>
           </li>
        </>
     );
}
 
export default Item;