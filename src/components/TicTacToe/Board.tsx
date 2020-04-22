import React,{useState} from 'react';
import Square from './Square'

const Board = () => {

  const [XisNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  

  const winner = calculateWinner(squares);

  const handleClick = (i: number):void => {
      
      const copySquares = squares.slice()

      if (calculateWinner(copySquares) || copySquares[i]) {
        return;
      }
      copySquares[i] = XisNext ? "X" : "O";
      setSquares(copySquares);
      setXIsNext(!XisNext);
    }

  let status = '';

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (XisNext ? "X" : "O");
  }

   const renderSquare = (i:number) => {
    return (
        <Square
          value={squares[i]}
          handleClick={() => handleClick(i)}
        />
      );
    }

    return (
      <>
      <div className="status">{status}</div>
        <div>
          
        <div className="TicTac__board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="TicTac__board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="TicTac__board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
       {checkBoardIsFull(squares) || calculateWinner(squares)   ?
       <button className="TicTac__restartBtn" onClick={() => setSquares(Array(9).fill(null)) }>restart</button> 
       : null 
       }
          
      
      </>  
    )
}
const checkBoardIsFull = (squares: number[]):boolean => {
  let isFull = false;
  for (let i = 0; i <squares.length; i++){
    if(squares[i] === null){
      isFull = false
    }else {
      isFull = true
    } 
  }
  return isFull
}
const calculateWinner = (squares: number[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  
  return null;
}

export default Board;