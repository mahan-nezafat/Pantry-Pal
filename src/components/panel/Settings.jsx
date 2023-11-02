import React, { useState } from "react";
import Input from "../utils/Input";
import Button  from "../utils/Button";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setLoggedIn, setPassword } from "../../features/auth/authSlice";
import { deleteUser, updateUser } from "../../services/dataBaseApis";
import { useNavigate } from "react-router-dom";
const Settings = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isDelete, setIsDelete] = useState(false)    
    const {email, id} = useSelector(store => store.auth);
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        if(isDelete && !email) return setErrorMessage('no email entered');
        if(!isDelete && !email || !isDelete && !newPassword) return setErrorMessage('no email or new password entered');
        if(isDelete) {
            console.log('user is deleted')
            deleteUser(id);
            dispatch(setLoggedIn(false));
            navigate("/login");
        }else {
            const updatedUser = {password: newPassword, email};
            const data = await updateUser(id, updatedUser);
            console.log(updateUser, data)
            dispatch(setLoggedIn(false));
            navigate("/login");

        }
    }
    
    function handleUpdate(e) {
        // e.preventDefault();
        setIsDelete(false)
       
    }   


    function handleDelete(e) {
        // e.preventDefault();
        setIsDelete(true)

    }
    
    return (
       <div className="flex-col w-full h-[40%] justify-center items-center">
        {
            errorMessage && <h1 className="text-center text-red-500">{errorMessage}</h1>
        }
         <form action="" onSubmit={handleSubmit} className="w-[40%] mx-auto h-[100%] flex-col justify-between items-center">
            <div className="flex justify-center items-center flex-col w-full h-full">
            <Input handler={(e) => dispatch(setEmail(e.target.value)) } value={email}  label='Email' htmlFor='Email'  name="email" type="email" placeHolder='Your New Email Address'/>
            {
                !isDelete && <Input handler={(e) => setNewPassword(e.target.value)} value={newPassword} label='New Password' name="new password" type="password" htmlFor='new Password' placeHolder='Your New Password'/>
            }
            </div>
            <div className="flex justify-center items-center w-full my-10 ml-10">
            <p className="cursor-pointer mr-2" onClick={(e) => isDelete ? handleUpdate(e) : handleDelete(e)}><span className={isDelete ? "text-black" : "text-red-500"}>{isDelete ? "Update Account? " : "Delete Acount? "}</span></p>
            <Button type={isDelete ?  "delete" : "default" } handleClick={(e) => handleSubmit(e)} >{isDelete ? "Delete Account" : "Update Account"}</Button>

            </div>
        </form>
       </div>
    );
}

export default Settings