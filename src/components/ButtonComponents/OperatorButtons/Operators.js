import React, {useState} from "react";
import { operators } from '../../../data';
import OperatorButton from "./OperatorButton";


const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorState] = useState(operators);

  return (
    <div className="oprator">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       operatorState.map((operator, index) => {
          return <OperatorButton key = {index} operator={operator} />;
        })
       }
    </div>
  );
};

export default Operators;