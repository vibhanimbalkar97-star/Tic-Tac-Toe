import React, { useState } from 'react'
import './TicTacToe.css';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    const renderSquare = (index) => {
        return (
        <button className='square' onClick={() => handleClick(index)}>{board[index]}</button>
        )
    }

    const handleClick = (index) => {
        if (board[index] !== null || winner){
            return;
        }
      const newBoard = [...board];
      newBoard[index] = isXTurn ? 'X' : 'O';
      setBoard(newBoard);
      setXTurn(!isXTurn);
      const winnerCombinations = checkWinner(newBoard);
      if(winnerCombinations) {
        setWinner(newBoard[winnerCombinations[0]])
        console.log(newBoard,"new")
        console.log(newBoard[winnerCombinations[0]],"winnerCombinations")

      }
    }

    const checkWinner = (newBoard) => {
        const combinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for (let i=0; i<combinations.length; i++) {
            const [a,b,c] = combinations[i];
            if (newBoard[a]===newBoard[b] && newBoard[b]===newBoard[c]){
                return combinations[i];
            }
        }
        return null;
    }

    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setWinner(null);
    }


    return (
        <>
        <div className="board">
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}

            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}

            </div>

        </div>
       
        {winner && 
    <div className='winner-text'>
        {winner} is the winner!!!!!! 
         <div><button onClick={handleReset}>Play Again</button></div>
    </div>}

        </>
    )
}

export default TicTacToe