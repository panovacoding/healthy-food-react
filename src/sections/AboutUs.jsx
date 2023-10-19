import React, { useState } from "react";
import aboutUsBanner from "./../img/aboutUsBanner.png";
import SectionSubtitle from "../components/SectionSubtitle";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

const AboutUs = () => {
  const [aboutUsSubtitle, setAboutUsSubtitle] = useState("About us");
  const [aboutUsTitle, setAboutUsTitle] = useState(
    "Food Stalls with Persons but to Product marketing plane catlogues etc to."
  );
  const [aboutUsDescription, setAboutUsDescription] = useState(
    "There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also equipment make your marketing plane Effective."
  );

  return (
    <div className="container">
      <div className="about-us">
        <img
          src={aboutUsBanner}
          alt="woman with salad"
          className="about-us__image"
        />
        <div className="about-us__content">
          <SectionSubtitle text={aboutUsSubtitle} />
          <SectionTitle text={aboutUsTitle} />
          <p className="about-us__description">{aboutUsDescription}</p>
          <Button textBtn="Read More" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
