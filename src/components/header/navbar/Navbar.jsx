import React, { useEffect } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Link from "./Link";
import Avatar from "./Avatar";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { darkMode } = useSelector(store => store.util)
  const dispatch = useDispatch();

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#310F01'

    }else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#E0DBDF'

    }
  }, [darkMode])

  return (
    <>
      <div className=" flex h-full w-full justify-between items-center  px-2 bg-transparent relative">
        <div className="flex w-[70%] justify-between">
          <Logo darkMode={darkMode} />
          <Menu darkMode={darkMode}/>
        </div>
        <Link darkMode={darkMode} dispatch={dispatch}/>
      </div>
    </>
  );
};

export default Navbar;
