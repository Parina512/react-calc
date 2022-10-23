import React from "react";

const DeleteRow = (props) => {
  return <button onClick={props?.handleDeleteRow}>Delete</button>;
};

export default DeleteRow;
