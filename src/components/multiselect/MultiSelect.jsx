import * as React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

export default function MultiSelect({ placeholder, time, handleSelect }) {
  return (
    <Select
      defaultValue="mercedes benz"
      placeholder={placeholder}
      sx={{
        width: 200,
        height: 40,
        backgroundColor: "#e5e7eb",
        fontSize: "16px",
        "& .MuiSelect-root": {
          backgroundColor: "#e5e7eb",
          fontSize: "16px",
        },
        "& .MuiSelect-select": {
          backgroundColor: "#e5e7eb",
          fontSize: "16px",
        },
        "& .MuiOption-root": {
          fontSize: "16px",
        },
      }}
    >
      {Array.isArray(time) &&
        time?.map((ele) => (
          <div key={ele?.id} onClick={() => handleSelect(ele)}>
            <Option value={ele?.value}>{`${ele?.value} minutes `} </Option>
          </div>
        ))}
    </Select>
  );
}
