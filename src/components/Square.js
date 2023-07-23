import React from "react";

// square component
const Square = ({value, onClick}) => {
  return (
    <button className={value !== " " ? "squares symbol" : "squares"}
    onClick= {onClick}
    > {value} </button>
  );
};

export default Square;
