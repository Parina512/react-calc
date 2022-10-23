import React from "react";
import RowToCalculate from "./RowToCalculate";

const CalcRows = ({
  rowsData,
  handleDeleteRow,
  handleDisableRow,
  handleRowDataUpdation,
}) => {
  return (
    rowsData.length > 0 &&
    rowsData.map((rowInfo, index) => (
      <RowToCalculate
        handleDeleteRow={handleDeleteRow}
        handleDisableRow={handleDisableRow}
        handleRowDataUpdation={handleRowDataUpdation}
        key={index}
        index={index}
        rowInfo={rowInfo}
      />
    ))
  );
};

export default CalcRows;
