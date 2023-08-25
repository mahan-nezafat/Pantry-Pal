import React from 'react';
import Header from './components/header/Header';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tastes from './pages/Tastes';
import Recommended from './pages/Recommended';
import Types from './pages/Types';
import Equipments from './pages/Equipments';
import Notfounded from './pages/Notfounded';
import { HomeProvider } from './contexts/HomeProvider';
import Search from './pages/Search';

const App = () => {
   

    return ( 
        <>
            <BrowserRouter>
               <HomeProvider>
                    
                    <Routes>
                        <Route path='/' element={<Home />} /> 
                        <Route path='search' element={<Search />}/> 
                        <Route path='tastes' element={<Tastes />} />
                        <Route path='recommended' element={<Recommended />} />
                        <Route path='types' element={<Types />} />
                        <Route path='equipments' element={<Equipments />} />
                        <Route path='*' element={<Notfounded />} />

                    </Routes>
               </HomeProvider>
            
            </BrowserRouter>
        </>
     );
}
 
export default App;