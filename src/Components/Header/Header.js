import React from "react";
import headerData from "./headerData";

const Header = () => {
  return (
    <header>
      <div> Тестовый текст </div>
      <div>
        {headerData.map((item, index) => (
          <button key={index} href={item.link}>
            {" "}
            {item.name}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
