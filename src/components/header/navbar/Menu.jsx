import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const Menu = () => {


    return ( 
    <>
       <div className="menu">
           
            <ul>
                <li><Link to="/search" >Search</Link></li>

                
              
            </ul>
       </div>
    </>
    );
}
 
export default Menu;