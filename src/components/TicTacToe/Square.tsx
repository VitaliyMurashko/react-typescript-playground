import React from 'react';

interface SquareProps  {
    value:string,
    handleClick: () => void
}

const Square = (props:SquareProps) => {
    return (
        <button className="TicTac__square" onClick={props.handleClick}>
          {props.value}
        </button>
      );
}

export default Square;