import React from "react";
import RatingItem from "../components/RatingItem";

type Props = {
  imgSrc: string,
  review: string,
  rating: string,
  name: string,
  occupation: string
};

const Slide = ({ imgSrc, review, rating, name, occupation }: Props) => {
  return (
    <div className="testimonial-item">
      <img src={imgSrc} />
      <p className="testimonial-item__review">{review}</p>
      <div className="testimonial-item__rating">
        {Array.from(Array(Number(rating)).keys()).map((i, index) => (
          <RatingItem key={index} isOrange />
        ))}
        {Array.from(Array(5 - Number(rating)).keys()).map((i, index) => (
          <RatingItem key={index} />
        ))}
      </div>
      <p className="testimonial-item__name">{name}</p>
      <p className="testimonial-item__occupation">{occupation}</p>
    </div>
  );
};

export default Slide;
