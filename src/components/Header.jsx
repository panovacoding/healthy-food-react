import React, { useState } from "react";
import logo from "./../img/logo.svg";
import NavList from "./NavList";
import Button from "./Button";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner-wrap">
        <img src={logo} className="header__logo" />
        <NavList />
      </div>
      <Button textBtn="Booking Now" classBtn="header__btn" />
      <BurgerMenu />
    </header>
  );
};

export default Header;
