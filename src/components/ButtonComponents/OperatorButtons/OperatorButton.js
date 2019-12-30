import React from "react";

const OperatorButton = (props) => {
  return (
    <button className='button operator-button' value = {props.operator.char}>
      {props.operator.char}
    </button>
  );
};

export default OperatorButton;