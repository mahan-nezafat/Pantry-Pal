import React from 'react';
import logo from '../../../img/icon.png'
import { Link } from 'react-router-dom';
const Logo = () => {

    
    return ( 
        <>
            
                <Link to="/">
                    <div className="dark:bg-amber-900 flex justify-center items-center rounded py-1 px-2 relative">
                        <h1 className='dark:text-amber-200 text-xl text-amber-900'>PantryPal</h1>
                    </div>
                </Link>
        </>
     );
}
 
export default Logo;