import { useState } from "react";
import headerLogo from "../../images/logo.svg";
import s from "./Header.module.scss";

const Header = () => {
   const [openMenu, setOpenMenu] = useState(false);
   return (
      <header className={s.header}>
         <a href="" className={s.headerLogo}>
            <img src={headerLogo} alt="" />
         </a>
         <nav className={s.headerMenu}>
            <ul
               className={
                  !openMenu
                     ? `${s.headerMenuList} ${s.openMenu}`
                     : s.headerMenuList
               }
            >
               <li className={s.headerMenuItem}>
                  <a href="" className={s.headerMenuLink}>
                     About
                  </a>
               </li>
               <li className={s.headerMenuItem}>
                  <a href="" className={s.headerMenuLink}>
                     Discover
                  </a>
               </li>
               <li className={s.headerMenuItem}>
                  <a href="" className={s.headerMenuLink}>
                     Get Started
                  </a>
               </li>
            </ul>
            <div
               onClick={() => setOpenMenu((prev) => !prev)}
               className={openMenu ? s.headerBurger : s.activeBurger}
            >
               <span></span>
            </div>
         </nav>
      </header>
   );
};
export default Header;
