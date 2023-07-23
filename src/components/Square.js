import React from "react";

// square component
const Square = ({value, onClick}) => {
  return (
    // if square is being clicked by user, use symbol class to change opacity
    <button className={value !== " " ? "squares symbol" : "squares"}
    onClick= {onClick}
    > {value} </button>
  );
};

export default Square;
