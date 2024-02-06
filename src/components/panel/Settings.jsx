import React, { useState } from "react";
import Input from "../utils/Input";
import Button  from "../utils/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearAllAuth, setEmail, setLoggedIn, setPassword } from "../../features/auth/authSlice";
import { deleteUser, updateUser } from "../../services/dataBaseApis";
import { useNavigate } from "react-router-dom";
import { clearAllFood } from "../../features/food/foodSlice";
import { clearAllSearch } from "../../features/search/searchSlice";
const Settings = ({ handleHotToast }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isDelete, setIsDelete] = useState(false)    
    let {email, id} = useSelector(store => store.auth);
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    let updateData, deleteData;
    async function handleSubmit(e) {
        e.preventDefault();
        let userId = JSON.parse(localStorage.getItem('user')).userId;
        try {
            if(id === null) id = userId;
        if(isDelete && !email) return setErrorMessage('no email entered');
        if(!isDelete && !email || !isDelete && !newPassword) return setErrorMessage('no email or new password entered');
        if(isDelete) {
            // console.log('user is deleted')
            deleteData = deleteUser(id).then((data, error) => data)
            handleHotToast('promise', {loading: 'deleting your account', success: 'deleting was successful', error: 'could not apply changes'}, deleteData)
            dispatch(setLoggedIn(false));
            dispatch(clearAllAuth());
            localStorage.removeItem('search')
            localStorage.removeItem('user')
            setTimeout(() => {
                navigate("/login");
            }, 2000)

        }else {
            // console.log(id)
            const updatedUser = {password: newPassword, email};
            updateData = updateUser(id, updatedUser).then((data, error) => data)
            // console.log(updateData)
            handleHotToast('promise', {loading: 'updating your account', success: 'updating was successful', error: 'could not apply changes'}, updateData)
            dispatch(setLoggedIn(false));
            setTimeout(() => {
                navigate("/login");
            }, 2000)
        }
        dispatch(clearAllAuth());
        dispatch(clearAllFood());
        dispatch(clearAllSearch());
        } catch (error) {
            console.log(error)
        }
    }
    
    function handleUpdate() {
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
         <form  onSubmit={handleSubmit} className="w-[40%] mx-auto h-[400px] flex-col justify-between items-center">
            <div className="flex justify-center items-center flex-col w-full h-full">
            <Input handler={(e) => dispatch(setEmail(e.target.value)) } value={email}  label='Email' htmlFor='Email'  name="email" type="email" placeHolder='Your New Email Address'/>
            {
                !isDelete && <Input handler={(e) => setNewPassword(e.target.value)} value={newPassword} label='New Password' name="new password" type="password" htmlFor='new Password' placeHolder='Your New Password'/>
            }
            </div>
            <div className="flex justify-center items-center w-full my-10 ml-10">
            <p className="cursor-pointer mr-2" onClick={(e) => isDelete ? handleUpdate(e) : handleDelete(e)}><span className={isDelete ? "text-amber-900 dark:text-amber-400" : "text-red-500"}>{isDelete ? "Update Account " : "Delete Acount "}</span></p>
            <Button type={isDelete ?  "delete" : "default" } handleClick={(e) => handleSubmit(e)} >{isDelete ? "Delete Account" : "Update Account"}</Button>

            </div>
        </form>
       </div>
    );
}

export default Settings