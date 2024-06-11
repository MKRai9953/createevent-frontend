import React, { useState } from "react";
import "./ButtonSelect.css"; // Assuming you have a CSS file for styling

const ButtonSelect = () => {
  const [selected, setSelected] = useState(null);

  const handleButtonClick = (button) => {
    setSelected(button);
  };

  return (
    <div className="button_select">
      <div
        className={`btns_select ${selected === "Email" ? "btnS" : ""}`}
        onClick={() => handleButtonClick("Email")}
      >
        Email
      </div>
      <div
        className={`btns_select ${selected === "Stack" ? "btnS" : ""}`}
        onClick={() => handleButtonClick("Stack")}
      >
        Stack
      </div>
    </div>
  );
};

export default ButtonSelect;
