import React from "react";
import "./InputText.css";
import { Button } from "antd";

const InputText = ({ text, placeholder, type, btntext, handleName }) => {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <>
      <label className="input_text" htmlFor={text}>
        <h5>{text}</h5>
      </label>
      <div className="input_container">
        <input
          id={text}
          className="event_input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type={type}
          placeholder={placeholder ? placeholder : ""}
        />
        <Button
          className="eventCreate_button"
          onClick={() => handleName(inputValue)}
        >
          {btntext}
        </Button>
      </div>
    </>
  );
};

export default InputText;
