// @ts-nocheck
import React, { useState, useContext, useEffect } from 'react';
import { Tile } from './Tile';
import styled from 'styled-components';
import { GameContext } from './MemoryGameReducer';



const Container = styled.div`
display: grid;
grid-template-columns: repeat(${props => props.width}, 7vw);
grid-template-rows: repeat(${props => props.height}, 7vw);
background: #e9e9e9;
color: rgba(33, 36, 29, 0.568);
border-radius: 5px 0 5px 5px;
padding:0.4vw;
`



export const Field: React.FC = ({ shuffledTilesData, setTileCount }) => {
    const { state, dispatch } = useContext(GameContext);
    const [clickCounter, setclickCounter] = useState(0);
    useEffect(() =>
        setTileCount(state.height * state.width), [state.height, state.width])
    return (
        <Container height={state.height} width={state.width}>
            {shuffledTilesData.map((TileData) => <Tile key={TileData.id} color={TileData.color} value={TileData.value} icon={TileData.icon}
                clickCounter={clickCounter} setclickCounter={setclickCounter}
            />)}
        </Container>

    )
}

