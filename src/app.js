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

const App = () => {
   

    return ( 
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='tastes' element={<Tastes />} />
                    <Route path='recommended' element={<Recommended />} />
                    <Route path='types' element={<Types />} />
                    <Route path='equipments' element={<Equipments />} />
                    <Route path='*' element={<Notfounded />} />

                </Routes>
            
            </BrowserRouter>
        </>
     );
}
 
export default App;