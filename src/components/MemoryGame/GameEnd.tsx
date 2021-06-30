// @ts-nocheck
import React, { useContext, useEffect } from 'react';
import { GameContext } from './MemoryGameReducer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Button = styled(Link)`
    background-color: cadetblue;
    text-decoration: none;
    padding: 10px 30px;
    font-size: 20px;
    border-radius: 5px;
    color: #fff;
    margin-bottom:20px;
    box-shadow: 2px 2px 3px #bababa, -2px -2px 3px #e9e9e9;
`
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    min-width: 400px;
    height: 300px;
    background-color: #e9e9e9;
`



export const GameEnd: React.FC = () => {
    const { state, dispatch } = useContext( GameContext );
    console.log('GAme end render')
    
    useEffect(()=>{
        const match = ()=> Math.floor(state.height * state.width / 2)
        dispatch({type:'GameEndStats', match:match()})
        dispatch({type:'timer', payload:0})
    },[])

    return (
        <Wrapper>
            <h2 style={{color: '#757171', fontSize:'2em'}}>{state.gameEndStatus}</h2>
            <Button to="/Memory-game/new-game">Try again</Button>
        </Wrapper>
    )
}