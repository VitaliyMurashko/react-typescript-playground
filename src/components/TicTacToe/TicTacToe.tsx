import React from 'react';
import Container from '../Container/Container';
import './TicTacToe.scss';
import Board from './Board'

const TicTacToe = () => {
    
    return (
        <Container BgColor={'azure'}>
            <div className="TicTac">
                <div className="TicTac__board">
                    <Board/>
                </div>
                <div className="TicTac__info">
                    <div></div>
                    {/* <ol>{moves}</ol> */}
                </div>
            </div>
        </Container>
    )
}




export default TicTacToe