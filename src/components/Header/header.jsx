import React from "react";
import classes from './Header.module.css';

const Header = () => {
   return(
      <header className={classes.header}>
        <img style={{width: 80, height: 50}} src='https://www.logo.wine/a/logo/Vogue_Poland/Vogue_Poland-Logo.wine.svg' alt="logo"></img>
      </header>
   )
}

export default Header;