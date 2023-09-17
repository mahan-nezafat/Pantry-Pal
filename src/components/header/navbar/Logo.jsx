import React from 'react';
import logo from '../../../img/icon.png'
import { Link } from 'react-router-dom';
const Logo = () => {

    
    return ( 
        <>
            
                <Link to="/">
                    <div className="flex justify-center items-center rounded py-1 px-2 relative">
                        <h1 className='text-xl'>PantryPal</h1>
                    </div>
                </Link>
        </>
     );
}
 
export default Logo;