import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import Avatar from './Avatar';
import { useSelector } from 'react-redux';

const Menu = () => {

    const {isLoggedIn} = useSelector(store => store.auth);
    return ( 
    <> 
       <div className="flex justify-center items-center w-[80%]">
           
            <ul className='flex w-[100%] justify-center items-center'>
                <Item><Link className='transition-colors duration-300 py-3 px-4  hover:text-white' to="/search" >Search</Link></Item>
                <Item><Link className='transition-colors duration-300 py-3 px-4  hover:text-white' to={"/mealplaner"}>Meal Planer</Link></Item>
                {
                    isLoggedIn ? 
                        <Avatar />
                        :
                        <Item><Link className='transition-colors duration-300 py-3 px-4  hover:text-white' to={"/login"} >Login</Link></Item>
                }
            </ul>
       </div>
    </>
    );
}
 
export default Menu;