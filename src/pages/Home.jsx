import React, { useEffect, useReducer } from 'react';
// import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Header from '../components/header/Header';
import { useDispatch } from 'react-redux';
import { setDarkMode } from '../features/util/utilSlice';

const Home = () => {
 
    return ( 
        <>  
            <Main/>
        </>
     );
}
 
export default Home;