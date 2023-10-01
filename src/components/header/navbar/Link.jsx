import React from 'react';
import github from '../../../img/github.svg'
const Link = () => {
    return ( 
        <>
           <div className='flex w-[20%] justify-between flex-row-reverse'>
                <div className="flex justify-center items-center">
                    <img src={github} alt="github" />
                    <a className='pl-1' href="https://github.com/mahan-nezafat" target='_blank'>Github</a>
                </div>
                <div className="">
                    <button>Dark Mode</button>
                </div>
                
           </div>
        </>
     );
}
 
export default Link;