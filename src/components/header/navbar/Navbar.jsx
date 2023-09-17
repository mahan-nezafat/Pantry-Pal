import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Link from "./Link";

const Navbar = () => {


  return (
    <>
      <div className="flex w-full justify-between items-center py-3 px-2 translate-y-7 bg-transparent">
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
