import React, { useState } from 'react';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center my-20">
      <h1 className="text-6xl font-bold tracking-tighter text-center mb-5">
        Tic Tac Toe
      </h1>
      <div className="grid grid-cols-3 gap-2 w-64">
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            aria-label={`Cell ${index + 1}, ${value || 'empty'}`}
            tabIndex={0}
            disabled={board[index] || winner}
            className="w-20 h-20 bg-amber-200 flex items-center justify-center text-3xl font-semibold text-black-800 border-2 border-amber-500  ${!board[index] && !winner ? 'hover:bg-amber-300' : 'cursor-not-allowed opacity-75'} transition-all duration-200 rounded-md"
          >
            {value}
          </button>
        ))}
      </div>
      <div className="mt-5 content-center ">
        {winner ? (
          <h2 className="text-2xl font-semibold text-green-600 text-center">
            {winner} Wins!
          </h2>
        ) : board.every((cell) => cell) ? (
          <h2 className="text-2xl font-semibold text-red-600 text-center">
            It's a Draw!
          </h2>
        ) : (
          <h2 className="text-xl font-semibold text-gray-700 text-center">
            Next Player: {isXNext ? 'X' : 'O'}
          </h2>
        )}
        <button
          onClick={resetGame}
          className="ml-1 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default TicTacToe;
