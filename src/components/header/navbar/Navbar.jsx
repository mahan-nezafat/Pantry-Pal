import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Link from "./Link";

const Navbar = () => {


  return (
    <>
      <div className="flex h-full w-full justify-between items-center  px-2 bg-transparent">
        <div className="flex w-[40%] justify-around">
          <Logo />
          <Menu />
        </div>
        <Link />
      </div>
    </>
  );
};

export default Navbar;
