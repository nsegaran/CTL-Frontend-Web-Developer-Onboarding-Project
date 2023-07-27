import React from "react";
import Square from "./Square";

// board component, mapping board index to square button
const Board = ({squares, onClick}) => (
  < div className="board"
  > {squares.map((value, i) => (<Square key={i} value={value} onClick={() => onClick(i)} />))}</div>
);

export default Board;
