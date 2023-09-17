import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const Menu = () => {


    return ( 
    <> 
       <div className="flex justify-center items-center">
           
            <ul>
                <Item><Link className='transition-colors duration-300 py-3 px-4  hover:text-white' to="/search" >Search</Link></Item>
                <Item><Link className='transition-colors duration-300 py-3 px-4  hover:text-white' to={"/login"} >Login</Link></Item>
                <Item><Link className='transition-colors duration-300 py-3 px-4  hover:text-white' to={"/mealplaner"}>Meal Planer</Link></Item>
              
            </ul>
       </div>
    </>
    );
}
 
export default Menu;