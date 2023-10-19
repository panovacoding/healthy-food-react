import React, { useState } from "react";
import SectionSubtitle from "../components/SectionSubtitle";
import SectionTitle from "./../components/SectionTitle";
import featureDelivery from "./../img/featureDelivery.svg";
import featureQuality from "./../img/featureQuality.svg";
import featureTaste from "./../img/featureTaste.svg";
import FeatureItem from "../components/FeatureItem";

const Features = () => {
  const [features, setFeatures] = useState([
    {
      image: featureQuality,
      name: "Quality Food",
      description:
        "It can be a very secure path to earn good money and make you very successful creative entrepreneur."
    },
    {
      image: featureDelivery,
      name: "Food Delivery",
      description:
        "It can be a very secure path to earn good money and make you very successful creative entrepreneur."
    },
    {
      image: featureTaste,
      name: "Super Taste",
      description:
        "It can be a very secure path to earn good money and make you very successful creative entrepreneur."
    }
  ]);

  return (
    <div className="features">
      <div className="container">
        <div class="section-title-wrap">
          <SectionSubtitle text="features" />
          <SectionTitle text="Food with a New Passion" />
        </div>
        <ul className="features-list">
          {features.map(({ image, name, description }, index) => (
            <FeatureItem
              key={index}
              imgSrc={image}
              title={name}
              description={description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
