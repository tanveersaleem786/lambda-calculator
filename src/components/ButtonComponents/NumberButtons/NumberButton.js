import React from "react";

const NumberButton = (props) => {
  return (
    <button className = {"button number-button " + (props.number === '0' ? 'zero-button' : '')} value = {props.number} >
      {props.number}
    </button>
  );
};

export default NumberButton;