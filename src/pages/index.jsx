import React, { useEffect, useState } from "react";
import CalcRows from "../components/CalcRows";

const Calc = () => {
  const [totalAns, setTotalAns] = useState(0);
  const [rowsData, setRowsData] = useState([
    { disable: false, value: 0, sign: "+" },
  ]);

  useEffect(() => {
    let result = 0;
    rowsData.forEach((rowInfo, index) => {
      const { disable, value, sign } = rowInfo;
      //   if (!disable) {
      if (sign === "+") {
        result += Number(value);
      } else {
        result -= Number(value);
      }
      //   }
    });
    setTotalAns(result);
  }, [rowsData]);

  const handleAddRow = () => {
    const newRowsData = [...rowsData];
    newRowsData.push({
      sign: "+",
      value: 0,
      disable: false,
    });
    setRowsData(newRowsData);
  };

  const handleDeleteRow = (index) => {
    let newRowsData = rowsData;
    newRowsData.splice(index, 1);
    setRowsData([...newRowsData]);
  };

  const handleDisableRow = (index) => {
    let newRowsData = rowsData;
    newRowsData[index] = {
      ...newRowsData[index],
      disable: !newRowsData[index].disable,
    };
    setRowsData([...newRowsData]);
  };

  const handleRowDataUpdation = (index, newRowInfo) => {
    let newRowsData = rowsData;
    newRowsData.splice(index, 1, newRowInfo);
    setRowsData([...newRowsData]);
  };

  return (
    <div className="calc-wrapper">
      <button className="add-row-cta" onClick={handleAddRow}>
        Add Row
      </button>
      <CalcRows
        handleDeleteRow={handleDeleteRow}
        handleDisableRow={handleDisableRow}
        handleRowDataUpdation={handleRowDataUpdation}
        rowsData={rowsData}
      />
      <h3>{`Result: ${totalAns}`}</h3>

      <p>
        Here disabled is also consider in calculation, but you can't modify that
        row details.
      </p>
    </div>
  );
};

export default Calc;
