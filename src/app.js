import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Loading from "./components/Loading";
import "./index.css";


const Home = lazy(() => import("./pages/Home"));
const Notfounded = lazy(() => import("./pages/Notfounded"));
const Search = lazy(() => import("./pages/Search"));
const Food = lazy(() => import("./pages/Food"));
const Login = lazy(() => import("./pages/Login"));
const MealPlaner = lazy(() => import("./pages/MealPlaner"));
const UserPanel = lazy(() => import("./pages/UserPanel"));
const App = () => {
  return (
    <> 
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* <Route index element={<Navigate replace to="/" />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/food" element={<Food />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mealplaner" element={<MealPlaner />} />
            <Route path="/userpanel" element={<UserPanel />} />
            <Route path="*" element={<Notfounded />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
