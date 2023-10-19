import React from "react";

type Props = {
  link: string,
  text: string
};

const NavListItem = ({ link, text }: Props) => {
  return (
    <li className="nav-list-item">
      <a href={link} className="nav-list-item__link">
        {text}
      </a>
    </li>
  );
};

export default NavListItem;
