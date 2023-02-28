import {useEffect, useState} from "react";
import {Close, HamburgerMenu, Logo} from "../../assets";
import {Navbar} from "./navbar/Navbar"
import './Header.scss'
import {useMediaQuery} from "../../hooks/useMediaQuery.jsx";

const Header = () => {
    const [collapsed, setCollapsed] = useState(false)
    const changeCollapsed = () => {
        setCollapsed(!collapsed)
    }
    const isPhone=useMediaQuery('(max-width : 767px)')
    const isTablet=useMediaQuery('(min-width : 767px) and (max-width : 1024px)')
    const isDesktop=useMediaQuery('(min-width : 1024px)')

    useEffect(() => {
        const header=document.getElementsByTagName("header")[0]
        isTablet || isDesktop ? header.removeAttribute("class") : collapsed ? header.setAttribute("class","collapsed") : header.setAttribute("class","non-collapsed")
    },[isPhone,isTablet,isDesktop,collapsed]);
    return (
        <header>
            <img src={Logo} alt="little lemon logo"/>
            {isPhone && <div className={"open-close-navbar"}>
                <button onClick={changeCollapsed} className='open-nav-button'>
                    <img src={HamburgerMenu} alt="open menu button"/>
                </button>
                <button onClick={changeCollapsed} className='close-nav-button'>
                    <img src={Close} alt="close menu button"/>
                </button>
            </div>}
            {(collapsed || isTablet || isDesktop) && <Navbar/>}
        </header>
    );
};

export default Header
