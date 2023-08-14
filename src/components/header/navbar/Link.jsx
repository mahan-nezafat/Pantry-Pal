import React from 'react';
import github from '../../../img/github.svg'
const Link = () => {
    return ( 
        <>
            <div className="social-link">
                <img src={github} alt="github" />
                <a href="https://github.com/mahan-nezafat">Github</a>
            </div>
        </>
     );
}
 
export default Link;