import React from "react";

// TODO: how can I integrate the X and O class here? Where do I define?
// square component

const Square = ({value, onClick}) => {
  return (
    <button className={value !== " " ? "squares symbol" : "squares"}
    onClick= {onClick}
    > {value} </button>
  );
};

export default Square;
