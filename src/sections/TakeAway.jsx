import React, { useState } from "react";
import phone from "../img/phone.png";
import SectionSubtitle from "../components/SectionSubtitle";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

const TakeAway = () => {
  const [takeAwayTitle, setTakeAwayTitle] = useState(
    "Food Stalls with Persons but to Product marketing plane."
  );
  const [takeAwaySubtitle, setTakeAwaySubtitle] = useState("take away");
  const [takeAwayDescription, setTakeAwayDescription] = useState(
    "There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipmentwith Persons but also Just Food Stalls with Persons."
  );

  return (
    <div className="take-away">
      <div className="take-away__inner-wrap">
        <div className="container">
          <div className="take-away__content">
            <SectionSubtitle text={takeAwaySubtitle} />
            <SectionTitle text={takeAwayTitle} />
            <p className="take-away__description">{takeAwayDescription}</p>
            <div className="take-away__buttons">
              <Button isMobileAppBtn />
              <Button isMobileAppBtn isGoogle />
            </div>
          </div>
        </div>
      </div>
      <img src={phone} alt="phone" className="take-away__image" />
    </div>
  );
};

export default TakeAway;
