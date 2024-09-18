import React from "react";

const CheckListItem = ({ label, text, checked, handleUserClick }) => {
  return (
    <div>
      <label htmlFor={label}>{text}</label>
      <input
        onClick={(e) => handleUserClick(e)}
        type="checkbox"
        name={label}
        checked={checked}
      />
    </div>
  );
};

export default CheckListItem;
