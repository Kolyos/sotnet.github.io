import React, { useState } from "react";
import classes from './NavBar.module.css'
import "./active.css"
import { NavLink } from "react-router-dom";


const NavBar = () => {


   return (
      <>
         <nav className={classes.nav}>
            <div>
               <NavLink className="bar__main" to='/maincontent'>Profile</NavLink>
            </div>
            <div>
               <NavLink className="bar__main" to='/dialog'>Messages</NavLink>
            </div>
            <div className={classes.link}>
               <a href='#'>News</a>
            </div>
            <div className={classes.link}>
               <a href='#'>Music</a>
            </div>
            <div className={classes.link}>
               <a href='#'>Settings</a>
            </div>
         </nav>
         {/* <Outlet/> */}
      </>
   )
}

export default NavBar;