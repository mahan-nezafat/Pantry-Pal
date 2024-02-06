import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import Avatar from './Avatar';
import { useSelector } from 'react-redux';

const Menu = ({show}) => {

    const {isLoggedIn} = useSelector(store => store.auth);


    function handleRemoveLocalFood() {
        localStorage.removeItem('food');
    }

    return ( 
    <> 
       <div className={`flex justify-around items-center w-[100%] `}>
           
            <ul className='flex max-md:w-[80%] w-[60%] max-xl:w-[80%] max-lg:w-[80%]  max-md:flex-col max-md:h-full  max-md:justify-start  max-md:mt-20 justify-around items-center'>
                <Item><Link onClick={handleRemoveLocalFood} className='transition-colors duration-300 py-3 px-4 dark:text-amber-400 text-amber-900 hover:text-amber-200 hover:dark:text-amber-200' to="/search" >Search</Link></Item>
                <Item><Link onClick={handleRemoveLocalFood} className='transition-colors duration-300 py-3 px-4 dark:text-amber-400 text-amber-900 hover:text-amber-200 hover:dark:text-amber-200' to={"/mealplaner"}>Meal Planer</Link></Item>
                {/* <Item><Link className={` transition-colors duration-300 py-3 px-4 dark:text-amber-400 text-amber-900 hover:text-amber-200 hover:dark:text-amber-200`} to={"/login"}>Login</Link></Item> */}
             
                
                {
                    isLoggedIn ? 
                        <Avatar />
                        :
                        <Item><Link className={` transition-colors duration-300 py-3 px-4 dark:text-amber-400 text-amber-900 hover:text-amber-200 hover:dark:text-amber-200`} to={"/login"}>Login</Link></Item>
                }
                {/* </li> */}
            </ul>
       </div>
    </>
    );
}
 
export default Menu;