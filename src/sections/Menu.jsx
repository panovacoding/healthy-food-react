import React, { useState } from "react";
import SectionSubtitle from "../components/SectionSubtitle";
import SectionTitle from "../components/SectionTitle";
import MenuItem from "../components/MenuItem";
import logo from "./../img/logo.svg";
import menuItem1 from "../img/menuItem1.png";
import menuItem2 from "../img/menuItem2.png";
import menuItem3 from "../img/menuItem3.png";
import menuItem4 from "../img/menuItem4.png";
import menuItem5 from "../img/menuItem5.png";
import menuItem6 from "../img/menuItem6.png";
import Button from "../components/Button";

const Menu = () => {
  const [menuSubtitle, setMenuSubtitle] = useState("Menu");
  const [menuTitle, setMenuTitle] = useState("Food Full of treaty Love");
  const [menuDescription, setMenuDescription] = useState(
    "There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers"
  );

  const [menuItems, setMenuItems] = useState([
    {
      img: menuItem1,
      name: "Vegie Muffen",
      price: "16",
      description:
        "There are many things are needed to start the Fast Food Business.",
      rating: "4"
    },
    {
      img: menuItem2,
      name: "Salads",
      price: "12",
      description:
        "There are many things are needed to start the Fast Food Business.",
      rating: "5"
    },
    {
      img: menuItem3,
      name: "Burger",
      price: "10",
      description:
        "There are many things are needed to start the Fast Food Business.",
      rating: "3"
    },
    {
      img: menuItem4,
      name: "Delmonico Steak dish",
      price: "14",
      description:
        "There are many things are needed to start the Fast Food Business.",
      rating: "2"
    },
    {
      img: menuItem5,
      name: "Egg Masala",
      price: "9",
      description:
        "There are many things are needed to start the Fast Food Business.",
      rating: "4"
    },
    {
      img: menuItem6,
      name: "Peach Melba dish",
      price: "15",
      description:
        "There are many things are needed to start the Fast Food Business.",
      rating: "3"
    }
  ]);

  return (
    <div className="container">
      <div className="menu">
        <SectionSubtitle text={menuSubtitle} />
        <SectionTitle text={menuTitle} />
        <p className="menu__description">{menuDescription}</p>
        <ul className="menu-list">
          {menuItems.map(({ img, name, price, description, rating }, index) => (
            <MenuItem
              key={index}
              imgSrc={img}
              name={name}
              price={price}
              description={description}
              rating={rating}
            />
          ))}
        </ul>
        <Button isInverted textBtn="Learn More" />
      </div>
    </div>
  );
};

export default Menu;
