import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import Avatar from './Avatar';
import { useSelector } from 'react-redux';

const Menu = () => {

    const {isLoggedIn} = useSelector(store => store.auth);
    return ( 
    <> 
       <div className="flex justify-around items-center w-[100%]">
           
            <ul className='flex w-[40%] justify-around items-center'>
                <Item><Link className='transition-colors duration-300 py-3 px-4 dark:text-amber-400 text-amber-900 hover:text-[#e0dbdf] hover:dark:dark:text-amber-200' to="/search" >Search</Link></Item>
                <Item><Link className='transition-colors duration-300 py-3 px-4 dark:text-amber-400 text-amber-900 hover:text-[#e0dbdf] hover:dark:text-amber-200' to={"/mealplaner"}>Meal Planer</Link></Item>
                {
                    isLoggedIn ? 
                        <Avatar />
                        :
                        <Item><Link className='transition-colors duration-300 py-3 px-4 dark:text-amber-400 text-amber-900 hover:text-[#e0dbdf] hover:dark:text-amber-200' to={"/login"} >Login</Link></Item>
                }
            </ul>
       </div>
    </>
    );
}
 
export default Menu;