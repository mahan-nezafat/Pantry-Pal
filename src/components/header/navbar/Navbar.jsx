import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Link from './Link';

const Navbar = () => {
    return ( 
        <>
           <div className="nav-bar">
            <Logo />
            <Menu />
            <Link />
           </div>
        </>
     );
}
 
export default Navbar ;