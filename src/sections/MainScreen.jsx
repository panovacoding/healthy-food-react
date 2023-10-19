import React, { useState } from "react";
import Header from "./../components/Header";
import Button from "./../components/Button";

const MainScreen = () => {
  const [mainTitle, setMainTitle] = useState(
    "Making time a good time by making food the good food."
  );
  const [mainDescription, setMainDescription] = useState(
    "There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,"
  );

  const [mainButtons, setMainButtons] = useState([
    { text: "Order Now", isInverted: false },
    { text: "Food Details", isInverted: true }
  ]);

  return (
    <div className="main-screen">
      <div className="container">
        <Header />
        <h1 className="main-title">{mainTitle}</h1>
        <p className="main-description">{mainDescription}</p>
        <div className="main-screen-buttons">
          {mainButtons.map(({ text, isInverted }, index) => (
            <Button key={index} textBtn={text} isInverted={isInverted} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
