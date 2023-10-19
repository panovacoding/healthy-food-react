import React from "react";
import Button from "./Button";
import RatingItem from "./RatingItem";

type Props = {
  imgSrc: string,
  name: string,
  price: string,
  rating: string
};

const MenuItem = ({ imgSrc, name, price, description, rating }: Props) => {
  return (
    <li className="menu-item">
      <img src={imgSrc} className="menu-item__image" />
      <div className="menu-item__info-wrap">
        <div className="menu-item__info">
          <div className="menu-item__name">{name}</div>
          <div className="menu-item__price">{price}$</div>
        </div>
        <p className="menu-item__description">{description}</p>
        <div className="menu-item__bottom">
          <Button textBtn="+" />
          <div className="menu-item__rating">
            {Array.from(Array(Number(rating)).keys()).map((i, index) => (
              <RatingItem key={index} isOrange />
            ))}
            {Array.from(Array(5 - Number(rating)).keys()).map((i, index) => (
              <RatingItem key={index} />
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
