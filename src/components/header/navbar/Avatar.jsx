import React from 'react';
import avatar from '../../../assets/images/avatar.png';
import { useSelector } from 'react-redux';
const Avatar = () => {

    const {fullName} = useSelector(store => store.auth);


    return ( 
        <>
            <div className='flex justify-center items-center'>
            <img src={avatar} alt="avatar" className='w-[40px] rounded-[50%] bg-transparent' />
            <span className='px-2 text-amber-900 dark:text-amber-400'>{fullName}</span>

            </div>
        </>
     );
}
 
export default Avatar;