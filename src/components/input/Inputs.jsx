import React from "react";
import "./Input.css";

const Inputs = ({ type, handleEvent }) => {
  return (
    <>
      <div className="date_input">
        <input type={type} onChange={handleEvent} />
      </div>
    </>
  );
};

export default Inputs;
