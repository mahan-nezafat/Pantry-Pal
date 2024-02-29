import React, { useEffect } from 'react';
// import github from '../../../img/github.svg'
import Github from '../../utils/Github';
import { setDarkMode } from '../../../features/util/utilSlice';
import DarkModeButton from '../../utils/DarkModeButton';
const Link = ({ dispatch, darkMode }) => {

    const darkModeLocal = JSON.parse(localStorage.getItem('darkmode'))
    // let darkModeLocal;

    function handleChange(e) {
        dispatch(setDarkMode(e.target.checked));
        localStorage.setItem('darkmode', e.target.checked)
        // console.log(localStorage.getItem('darkmode'))
    }
    
   
    return ( 
        <>
           <div className='flex w-[20%] justify-center flex-row-reverse'>
               
                <div className='max-sm:mr-4'>
                {/* darkmode button */}
                <DarkModeButton handleChange={handleChange} darkMode={darkMode} />
                </div>
                <div className="flex justify-center items-center px-2">
                    <Github fillColor={darkModeLocal ? '#FBBF24' : '#78350f'} />
                    <a className='pl-1 dark:text-amber-400 text-amber-900' href="https://github.com/mahan-nezafat" rel='noreferrer' target='_blank'>Github</a>
                </div>
           </div>
        </>
     );
}
 
export default Link;