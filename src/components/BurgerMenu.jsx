import React from "react";

const BurgerMenu = () => {
  return (
    <div className="burger-menu">
      <input id="toggle" type="checkbox"></input>
      <label for="toggle" class="hamburger">
        <div class="top-bun"></div>
        <div class="meat"></div>
        <div class="bottom-bun"></div>
      </label>
    </div>
  );
};

export default BurgerMenu;
