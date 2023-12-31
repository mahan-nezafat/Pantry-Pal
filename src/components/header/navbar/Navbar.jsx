import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Link from "./Link";
import Avatar from "./Avatar";

const Navbar = () => {


  return (
    <>
      <div className="flex h-full w-full justify-between items-center  px-2 bg-transparent relative">
        <div className="flex w-[40%] justify-between">
          <Logo />
          <Menu />
        </div>
        <Link />
      </div>
    </>
  );
};

export default Navbar;
