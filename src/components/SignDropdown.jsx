import React from "react";

const SignDropdown = ({ handleChange, sign, disable }) => {
  return (
    <select
      name="sign"
      id="sign"
      onChange={handleChange}
      disabled={!!disable}
      defaultValue={sign}
    >
      <option value="+">+</option>
      <option value="-">-</option>
    </select>
  );
};

export default SignDropdown;
