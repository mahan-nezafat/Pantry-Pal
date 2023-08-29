import React, { Suspense, lazy } from 'react';
import Header from './components/header/Header';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeProvider } from './contexts/HomeProvider';
import Loading from './components/Loading';
// import Home from './pages/Home';
// import Tastes from './pages/Tastes';
// import Recommended from './pages/Recommended';
// import Types from './pages/Types';
// import Equipments from './pages/Equipments';
// import Notfounded from './pages/Notfounded';
// import Search from './pages/Search';


const Home = lazy(() => import("./pages/Home"));
const Tastes = lazy(() => import("./pages/Tastes"));
const Recommended = lazy(() => import("./pages/Recommended"));
const Types = lazy(() => import("./pages/Types"));
const Equipments = lazy(() => import("./pages/Equipments"));
const Notfounded = lazy(() => import("./pages/Notfounded"));
const Search = lazy(() => import("./pages/Search"));

const App = () => {
   

    return ( 
        <>
               <HomeProvider>
            <BrowserRouter>
                    <Suspense fallback={<Loading/>}>
                        <Routes>
                            <Route path='/' element={<Home />} /> 
                            <Route path='search' element={<Search />}/> 
                            <Route path='tastes' element={<Tastes />} />
                            <Route path='recommended' element={<Recommended />} />
                            <Route path='types' element={<Types />} />
                            <Route path='equipments' element={<Equipments />} />
                            <Route path='*' element={<Notfounded />} />

                        </Routes>
                    </Suspense>
            
            </BrowserRouter>
               </HomeProvider>
        </>
     );
}
 
export default App;