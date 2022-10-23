import React from "react";
import SignDropdown from "./SignDropdown";

const RowToCalculate = ({
  index,
  rowInfo,
  handleDeleteRow,
  handleDisableRow,
  handleRowDataUpdation,
}) => {
  const handleChange = (e) => {
    if (e.target.value) {
      let newRowInfo = rowInfo;
      newRowInfo[e.target.name] = e.target.value;
      handleRowDataUpdation(index, newRowInfo);
    }
  };

  const onDeleteRow = () => {
    handleDeleteRow(index);
  };

  const onDisableRow = () => {
    handleDisableRow(index);
  };

  const { value, sign, disable } = rowInfo;
  return (
    <div className="calc-row-wrapper">
      <SignDropdown disable={disable} handleChange={handleChange} sign={sign} />
      <input
        type="number"
        name="value"
        onChange={handleChange}
        disabled={!!disable}
        value={value}
      ></input>
      <button onClick={onDeleteRow}>Delete</button>
      <button onClick={onDisableRow} name="disable">
        Disable
      </button>
    </div>
  );
};

export default RowToCalculate;
