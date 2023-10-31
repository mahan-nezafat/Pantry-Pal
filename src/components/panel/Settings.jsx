import React, { useState } from "react";
import Input from "../utils/Input";
import Button  from "../utils/Button";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../../features/auth/authSlice";
import { deleteUser, updateUser } from "../../services/dataBaseApis";
import { useNavigate } from "react-router-dom";
const Settings = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isDelete, setIsDelete] = useState(false)    
    const {password, email, id} = useSelector(store => store.auth);
    const [newPassword, setNewPassword] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        if(!email || !password) return
        if(isDelete && email && password) {
            console.log('user is deleted')
            deleteUser(id);
            navigate(-1);
        }else {
            const updatedUser = {password: newPassword, email};
            const data = await updateUser(id, updatedUser);
            console.log(updateUser, data)

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
       <div className="flex w-full h-full justify-center items-center">
         <form action="" onSubmit={handleSubmit} className="w-[24%]">
            <div className="flex justify-center items-center flex-col w-full">
            <Input handler={(e) => dispatch(setEmail(e.target.value)) } value={email}  label='Email' htmlFor='Email'  name="email" type="email" placeHolder='Your Email Address'/>
            <Input  handler={(e) => dispatch(setPassword(e.target.value))} value={password} label='Password' htmlFor='password'  name="password" type="password" placeHolder='Your Old Password'/>
            {
                !isDelete && <Input handler={(e) => setNewPassword(e.target.value)} value={newPassword} label='New Password' name="new password" type="password" htmlFor='new Password' placeHolder='Your New Password'/>
            }
            </div>
            <div className="flex justify-around items-center w-[70%] my-10 ml-10">
            <Button handleClick={(e) => isDelete ? handleUpdate(e) : handleDelete(e)}><span className={isDelete ? "text-black" : "text-red-500"}>{isDelete ? "Update Account? " : "Delete Acount? "}</span></Button>
            <Button type={isDelete ?  "delete" : "default" } handleClick={(e) => handleSubmit(e)} >{isDelete ? "Delete Account" : "Update Account"}</Button>

            </div>
        </form>
       </div>
    );
}

export default Settings