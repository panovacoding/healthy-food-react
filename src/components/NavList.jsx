import React, { useState } from "react";
import NavListItem from "./NavListItem";

const navList = [
  { link: "#", text: "Home" },
  { link: "#", text: "About Us" },
  { link: "#", text: "Menu" },
  { link: "#", text: "Features" },
  { link: "#", text: "Contact Us" }
];

const NavList = () => {
  return (
    <ul className="nav-list">
      {navList.map(({ link, text }, index) => (
        <NavListItem key={index} link={link} text={text} />
      ))}
    </ul>
  );
};

export default NavList;
