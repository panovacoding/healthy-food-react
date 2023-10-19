import React, { useState } from "react";
import SectionSubtitle from "../components/SectionSubtitle";
import SectionTitle from "../components/SectionTitle";
import reviewer1 from "../img/reviewer1.jpg";
import reviewer2 from "../img/reviewer2.jpg";
import reviewer3 from "../img/reviewer3.jpg";
import Slide from "../components/Slide";
import { register } from "swiper/element/bundle";
import Slider from "../components/Slider";
register();

import "swiper/css";

const Testimonial = () => {
  const [testimonialTitle, setTestimonialTitle] = useState(
    "Making Food great again and again"
  );
  const [testimonialSubtitle, setTestimonialSubtitle] = useState("testimonial");
  const [testimonialDescription, setTestimonialDescription] = useState(
    "You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your."
  );

  const [slides, setSlides] = useState([
    {
      img: reviewer1,
      review:
        "You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.",
      rating: "4",
      name: "Augusta W. Reynoso",
      occupation: "UI&UX DeSIGNER"
    },
    {
      img: reviewer2,
      review:
        "You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.",
      rating: "5",
      name: "George W. Williams",
      occupation: "Sales Manager"
    },
    {
      img: reviewer3,
      review:
        "You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.",
      rating: "3",
      name: "Catherine Brown",
      occupation: "Marketing Manager"
    }
  ]);

  return (
    <div className="testimonial">
      <div className="container">
        <SectionSubtitle text={testimonialSubtitle} />
        <SectionTitle text={testimonialTitle} />
        <p className="testimonial__description">{testimonialDescription}</p>
        <Slider>
          {slides.map(({ img, review, rating, name, occupation }, index) => (
            <swiper-slide>
              <Slide
                key={index}
                imgSrc={img}
                review={review}
                rating={rating}
                name={name}
                occupation={occupation}
              />
            </swiper-slide>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
