import React, { useEffect, useReducer } from 'react';
// import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Header from '../components/header/Header';
import { useDispatch } from 'react-redux';
import { setDarkMode } from '../features/util/utilSlice';

const Home = () => {
    const dispatch = useDispatch();
    const darkMode = JSON.parse(localStorage.getItem('darkmode'))
    useEffect(() => {
        dispatch(setDarkMode(darkMode))
        // if(darkMode) {            
        //     document.documentElement.classList.add('dark');
        //     document.body.style.backgroundColor = "#310F01"
        // }else {
        //     document.documentElement.classList.remove('dark');
        //     document.body.style.backgroundColor = "#E0DBDF"
        // }
        console.log(typeof darkMode, darkMode)

      
          
        // localStorage.setItem('darkmode', darkMode)

      },[darkMode, dispatch])
    return ( 
        <>  
            <Main/>
        </>
     );
}
 
export default Home;