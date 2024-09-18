import React from "react";

const CheckListItem = ({ label, text }) => {
  return (
    <div>
      <label htmlFor={label}>{text}</label>
      <input type="checkbox" name="getUp" />
    </div>
  );
};

export default CheckListItem;
