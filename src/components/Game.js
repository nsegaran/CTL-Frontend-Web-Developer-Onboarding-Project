import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";

const Game = () => {
  
  // handleClick function, called player clicks a game square/attempts a move
  let handleClick = (index) => {
    // ensures move is only made if square is empty and no player has won
    if (board[index] === " " && !winner) {
      // update board
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard)
      // update xIsNext value and stepNumber
      setXIsNext(!xIsNext);
      setStepNumber(stepNumber + 1)
    }
  }
  
  // jumpToStart function, called when player clicks "Go to Start" button
  const jumpToStart = () => {
    // reset board
    const newBoard = Array(9).fill(" ");
    setBoard(newBoard)
    // reset xIsNext and stepNumber
    setStepNumber(stepNumber = 0);
    setXIsNext(true);
  }
  
  // result function, determines string to set in infoWrapper
  const result = () => {
    // if winner is found, return winner
    if (winner) {
      return "Winner: " + winner
    }
    // if tie, return tie string
    if (!winner && stepNumber === 9) {
      return "Tie Game"
    }
    // in-gameplay, return next player
    else {
      return "Next Player: " + player
    }
  }
  // initalize states: board (array), stepNumber (count), and if player X is next (bool)
  var [board, setBoard] = useState(Array(9).fill(" "));
  var [stepNumber, setStepNumber] = useState(0);
  var [xIsNext, setXIsNext] = useState(true);
  // calculate winner and current player with each render 
  var player = xIsNext ? "X" : "O";
  var winner = calculateWinner(board);
  
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board squares={board} onClick={(index) => handleClick(index)} />
      <div className='info-wrapper'>
          <div>
            <button className="goToStart" onClick={() => jumpToStart()}>Go to Start</button>
          </div>
          <h3>{result()}</h3>
      </div>
  </>
  );
};

export default Game;