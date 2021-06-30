// @ts-nocheck
import React, {useState} from 'react';
import Container from '../Container/Container';
import { Field } from './Field';
import { TilesData } from './TileData';
import { DisplayGame } from './DisplayGame';




const MemoryGame:React.FC  = () => {
    const [TileCount, setTileCount] = useState(0);
    const shuffledTilesData = TilesData.slice(0, TileCount).sort(() => Math.random() - 0.5)
    

    return (
            <Container BgColor="#bae0dd">
                <div className="wrapper">
                    <DisplayGame/>
                    <Field shuffledTilesData ={shuffledTilesData} setTileCount={setTileCount}></Field>
                </div>   
            </Container>
    )
}

export default MemoryGame;