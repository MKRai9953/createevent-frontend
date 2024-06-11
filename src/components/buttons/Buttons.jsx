import React from "react";
import { Button, Flex } from "antd";
import "./Buttons.css";
const Buttons = ({ handleSubmit }) => (
  <div className="btns">
    <Flex gap="small" wrap>
      <Button>cancel</Button>
      <Button type="primary" onClick={handleSubmit}>
        create event
      </Button>
    </Flex>
  </div>
);
export default Buttons;
