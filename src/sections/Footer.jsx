import React from "react";
import logo from "../img/logo.svg";
import insta from "../img/insta.svg";
import twitter from "../img/twitter.svg";
import fb from "../img/fb.svg";
import youtube from "../img/youtube.svg";

const Footer = () => {
  const mainInfoFooter = [
    { name: "www.companyname.com", link: "#" },
    { name: "companyname@gmail.com", link: "mailto:companyname@gmail.com" },
    { name: "Phone: +7 485-118-03-25", link: "tel:+74851180325" }
  ];

  const menuList1 = [
    "Landingpage",
    "Documentation",
    "Referral Program",
    "UI & UX Design",
    "Web Design"
  ];

  const socials = [insta, twitter, fb, youtube];

  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__left-list">
          <li>
            <img src={logo} />
          </li>
          {mainInfoFooter.map(({ name, link }, index) => (
            <li key={index}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
        <ul className="footer__menu-list">
          <li>Home</li>
          {menuList1.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <ul className="footer__menu-list">
          <li>Menu</li>
          {menuList1.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
        <ul className="footer__menu-list">
          <li>Company</li>
          {menuList1.slice(0, 3).map((el, i) => (
            <li key={i}>{el}</li>
          ))}
          <li className="socials-container">
            {socials.map((el, i) => (
              <img key={i} src={el} />
            ))}
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
