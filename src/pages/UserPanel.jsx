import React from "react";
import Header from "../components/header/Header";
import Button from "../components/utils/Button";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedIn } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const UserPanel = () => {
    const {isLoggedIn} = useSelector(store => store.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function logOut() {
        dispatch(setLoggedIn(false));
        navigate(-1);
    }

    return (
        <>
            <Header />
            <div className="flex w-full h-[100vh] mt-5">
                <div className="w-[20%] flex flex-col border-r-2  ">
                    <ul>
                    <li className="py-2 mb-2 flex justify-center items-center border-2 border-solid border-black"><span>settings</span></li>
                    <li className="py-2 mb-2 flex justify-center items-center border-2 border-solid border-black"><span>settings</span></li>
                    <li className="py-2 mb-2 flex justify-center items-center border-2 border-solid border-black"><span>settings</span></li>
                    <li className="py-2 mb-2 flex justify-center items-center border-2 border-solid border-black"><span>settings</span></li>
                    <li className="py-2 mb-2 flex justify-center items-center border-2 border-solid border-black"><span>settings</span></li>
                    <li className="py-2 mb-2 flex justify-center items-center border-2 border-solid border-black"><span>settings</span></li>
                    <li className="py-2 mb-2 flex justify-center items-center border-2 border-solid border-black"><span>settings</span></li>
                    <li className="py-2 mb-2 flex justify-center items-center border-2 border-solid border-black"><span>settings</span></li>
                    </ul>
                    <Button handleClick={logOut} type="default"><span className="text-red-500">Log Out</span></Button>
                </div>
                <div className="w-[80%]"></div>
            </div>   
            
        </>
    );
}

export default UserPanel;
