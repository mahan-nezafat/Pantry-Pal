import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const Menu = () => {

    // const items = ['Tastes','Recommended','Types','Equipments'];

    return ( 
    <>
       <div className="menu">
           
            <ul>
                <li><Link to="/search" >Search</Link></li>

                <li><Link to="/tastes" >Tastes</Link></li>

                <li><Link to="/recommended" >Recommended</Link></li>

                <li><Link to="/types" >Types</Link></li>
                
                <li><Link to="/equipments" >Equipments</Link></li>
              
            </ul>
       </div>
    </>
    );
}
 
export default Menu;