import React from "react";

const ValueInput = (props) => {
  return (
    <div>
      <input type="number" onChange={props?.handleValueChange}></input>
    </div>
  );
};

export default ValueInput;
