import React from "react";

type Props = {
  imgSrc: string,
  title: string,
  description: string
};

const FeatureItem = ({ imgSrc, title, description }: Props) => {
  return (
    <li className="feature-item">
      <div className="feature-item__img-wrap">
        <img src={imgSrc} alt="" />
      </div>
      <p className="feature-item__name">{title}</p>
      <p className="feature-item__description">{description}</p>
    </li>
  );
};

export default FeatureItem;
