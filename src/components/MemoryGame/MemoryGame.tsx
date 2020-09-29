// @ts-nocheck
import React from 'react';
import Container from '../Container/Container';
import { Field } from './Field';
import { StepCount } from './StepCount';
import {TilesData} from './TileData';

const MemoryGame:React.FC  = () => {
    const shuffledTilesData = TilesData.sort(() => Math.random() - 0.5);
    return (
        <Container BgColor="#bae0dd">
            <div className="wrapper">
                <StepCount></StepCount>
                <Field shuffledTilesData ={shuffledTilesData}></Field>
            </div>   
        </Container>
    )
}

export default MemoryGame;