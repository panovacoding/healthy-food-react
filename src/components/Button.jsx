import React from "react";
import google from "../img/googlePlayLogo.svg";
import apple from "../img/appleLogo.svg";

type Props = {
  isMobileAppBtn?: boolean,
  isGoogle?: boolean,
  isInverted?: boolean,
  textBtn: string,
  classBtn?: string
};

const Button = ({
  isMobileAppBtn = false,
  isGoogle = false,
  isInverted,
  textBtn,
  classBtn
}: Props) => {
  if (isMobileAppBtn) {
    return (
      <button
        className={"app-btn " + (isGoogle ? "app-btn_google" : "app-btn_apple")}
      >
        {isGoogle ? (
          <>
            <img src={google} className="app-btn__logo" />
            <span>Google Play</span>
          </>
        ) : (
          <>
            <img src={apple} className="app-btn__logo" />
            <span>App Store</span>
          </>
        )}
      </button>
    );
  } else {
    return (
      <button
        className={
          "btn " + (isInverted ? "btn-inverted " : "btn-primary ") + classBtn
        }
      >
        {textBtn}
      </button>
    );
  }
};

export default Button;
