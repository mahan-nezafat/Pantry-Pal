import React from 'react';
import logo from '../../../img/icon.png'
const Logo = () => {
    return ( 
        <>
            <div className="logo">
                <img src={logo} alt="logo" />
                <h1>PantryPal</h1>
            </div>
        </>
     );
}
 
export default Logo;