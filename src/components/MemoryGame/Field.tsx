// @ts-nocheck
import React,{ useState } from 'react';
import { Tile } from './Tile';
import styled from 'styled-components';



const Container = styled.div`
display: grid;
grid-template-columns: repeat(6, 7vw);
grid-template-rows: repeat(5, 7vw);
background: #e9e9e9;
color: rgba(33, 36, 29, 0.568);
box-shadow: 2px 2px 3px #bababa, -2px -2px 3px #fff;
border-radius: 5px;
padding:0.4vw;
`



export const Field:React.FC  = ({shuffledTilesData}) => {
    const [clickCounter, setclickCounter] = useState(0);
      
    console.log(clickCounter);
    
    

    return (
        <Container>
            {shuffledTilesData.map((TileData)=> <Tile key={TileData.id} color={TileData.color} value={TileData.value} icon={TileData.icon}
            clickCounter = {clickCounter} setclickCounter ={setclickCounter}
            />)}
        </Container>
       
    )
}

