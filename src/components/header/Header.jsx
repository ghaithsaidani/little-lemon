import { useState } from "react";
import { Close, HamburgerMenu, Logo } from "../../assets/images";
import {Navbar} from "./navabr/Navbar"


export const Header = () => {
  const [collapsed,setCollapsed]=useState(false)
  const changeCollapsed=()=>{
    setCollapsed(!collapsed)
  }
  return (
    <header className={`${collapsed ? "collapsed":"non-collapsed"}`}>
      <img src={Logo} alt="little lemon logo" />
      <button onClick={changeCollapsed} className='open-nav-button'>
        <img src={HamburgerMenu} alt="open menu button" />
      </button>
      <button onClick={changeCollapsed} className='close-nav-button'>
        <img src={Close} alt="close menu button" />
      </button>
      {collapsed && <Navbar/>}
    </header>
  );
};
