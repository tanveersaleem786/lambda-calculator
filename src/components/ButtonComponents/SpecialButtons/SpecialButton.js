import React from "react";

const SpecialButton = (props) => {
  return (
    <button className='button' value = {props.special} >
      {props.special}
    </button>
  );
};

export default SpecialButton;