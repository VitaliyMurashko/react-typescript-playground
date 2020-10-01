// @ts-nocheck
import React,{ useEffect } from 'react';
import Container from '../Container/Container';
import { Field } from './Field';
import { GameSettings } from './GameSettings';
import {TilesData} from './TileData';

const MemoryGame:React.FC  = () => {
    useEffect(() => {
        console.log('MemoryGame mount')
    },[]);
    const shuffledTilesData = TilesData.sort(() => Math.random() - 0.5);
    return (
        
        <Container BgColor="#bae0dd">
            <div className="wrapper">
                <GameSettings></GameSettings>
                <Field shuffledTilesData ={shuffledTilesData}></Field>
            </div>   
        </Container>
    )
}

export default MemoryGame;