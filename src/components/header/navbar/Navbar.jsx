import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Link from "./Link";
import Avatar from "./Avatar";
import Hamburger from "src/components/utils/Hamburger";
import { useDispatch, useSelector } from "react-redux";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../utils/sheet"

const Navbar = () => {
  const { darkMode } = useSelector(store => store.util)
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  let width = window.innerWidth
  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#310F01'

    }else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#E0DBDF'

    }
  }, [darkMode])

  useEffect(() => {
    if(width > 768) {
      setShow(true);
    }else {
      setShow(false);
    }
  },[width])

  return (
    <>
      <div className=" flex h-full w-full justify-between items-center max-md:justify-center px-2 bg-transparent relative">
        <div className="flex w-[70%] justify-between">
          <Logo darkMode={darkMode} />
          <div className="max-md:hidden flex w-[80%] items-center justify-start">

            <Menu darkMode={darkMode} show={show}/>
          </div>

          
            
        </div>
        <Link darkMode={darkMode} dispatch={dispatch}/>
        {/* <div className="hidden max-md:block max-md:w-4 max-md:h-4 max-md:bg-amber-400 "></div> */}
        <div className="hidden max-md:flex justify-center items-center ml-5">
        <Sheet>
          <SheetTrigger><Hamburger  stroke={darkMode ? '#fbbf24' : '#78350f'}   /></SheetTrigger>
          <SheetContent >
            <SheetHeader>
              <SheetTitle  ><h1 className="dark:text-amber-400 text-amber-900">Menu</h1></SheetTitle>
              {/* <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription> */}

            </SheetHeader>
              <Menu darkMode={darkMode} show={show}/>
          </SheetContent>
        </Sheet>
        </div>
      
      </div>
    </>
  );
};

export default Navbar;
