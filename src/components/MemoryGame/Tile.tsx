// @ts-nocheck
import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { flipInY } from 'react-animations';
import { EmptyTile } from './EmptyTile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



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
    
    useEffect(() => {
        if(clickCounter > 2){
            setisClicked(false);
            setclickCounter(0);      
        }
    },[clickCounter]);

    const ClickHandler = () => {
        setisClicked(!isClicked)
        setclickCounter(clickCounter + 1)   
    }; 
    
    return (
        isClicked ? 
        <StyledTile bgrColor={color}>
            <div>
            <FontAwesomeIcon style={{'position':'initial', 'color':'#e9e9e9'}} size={'3x'} icon={icon.food} />
            </div>   
        </StyledTile> :
        <EmptyTile ClickHandler={ ClickHandler } />
    )
}
