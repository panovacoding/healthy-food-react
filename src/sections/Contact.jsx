import React, { useState } from "react";
import SectionSubtitle from "../components/SectionSubtitle";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

const Contact = () => {
  const [contactSubtitle, setContactSubtitle] = useState("contact");
  const [contactTitle, setContactTitle] = useState(
    "Food Stalls with Persons but also specialized equipment, Skills to manage."
  );

  return (
    <div className="contact">
      <div className="container">
        <SectionSubtitle text={contactSubtitle} />
        <SectionTitle text={contactTitle} />
        <div className="contact__input-wrap">
          <input type="text" placeholder="Enter your message" />
          <Button isOrange textBtn="Send" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
