import React from 'react';
import logo from '../../../img/icon.png'
import { Link } from 'react-router-dom';
const Logo = () => {
    return ( 
        <>
            
                <Link to="/">
                    <div className="logo">
                        {/* <img src={logo} alt="logo" /> */}
                        <h1>PantryPal</h1>
                    </div>
                </Link>
        </>
     );
}
 
export default Logo;