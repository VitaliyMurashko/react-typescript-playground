// @ts-nocheck
import React, { useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { flipInY } from 'react-animations';
import { EmptyTile } from './EmptyTile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GameContext } from './MemoryGameReducer';



const flipInYAnimation = keyframes`${flipInY}`;

const StyledTile = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: ${props => props.bgrColor};
    border: 1px solid #d8cece;
    animation: 1.2s ${flipInYAnimation};

`
interface PropType {
    color:string,
    value:number,
    icon:string
}




export const Tile:React.FC<PropType>  = ({color, value, icon, clickCounter, setclickCounter}) => {
    const [isClicked, setisClicked] = useState(false);

    const { state, dispatch } = useContext(GameContext);
    
    useEffect(() => {
        if(clickCounter > 2){
            setisClicked(false);
            setclickCounter(0);      
        }
    },[clickCounter]);

    const isMatchTile = () => state.matchTileValue.some((tileValue) => tileValue === value )

    const ClickHandler = () => {
        setisClicked(!isClicked);
        setclickCounter(clickCounter + 1);
        dispatch({type:'steps'})
        if(state.openTileValue[1]){
           if( state.openTileValue[0]  === state.openTileValue[1] ) {
               dispatch({type:'match'});
               dispatch({type:'matchTileValue', payload:state.openTileValue[0]})
           } 
            dispatch({
                type:'openTileValue',
                payload: []
            })
        } else {
            dispatch({
                type:'openTileValue',
                payload: [...state.openTileValue, value]
            })
        }
 
    }; 
    
    return (
        isMatchTile() || isClicked  ? 
        <StyledTile bgrColor={color}>
            <div>
            <FontAwesomeIcon style={{'position':'initial', 'color':'#e9e9e9'}} size={'3x'} icon={icon.food} />
            </div>   
        </StyledTile> :
        <EmptyTile ClickHandler={ ClickHandler } />
    )
}
