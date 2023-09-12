import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Link from "./Link";

const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="flex w-[30%] justify-around">
          <Logo />
          <Menu />
        </div>
        <Link />
      </div>
    </>
  );
};

export default Navbar;
