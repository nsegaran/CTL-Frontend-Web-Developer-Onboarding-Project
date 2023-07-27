// Array of winning index combinations
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// calculateWinner function, determines if there is a winner given current board
export function calculateWinner(squares) {
  // Iterate through winning index combinations
  for (let i = 0; i < winCombos.length; i++) {
    // For this winning index combo, check if board's indexes all have the same player
    if (squares[winCombos[i][0]] === squares[winCombos[i][1]]
      && squares[winCombos[i][1]] === squares[winCombos[i][2]]
      && squares[winCombos[i][0]] !== " ") {
      return squares[winCombos[i][0]];
    } 
  }
  return null;
}