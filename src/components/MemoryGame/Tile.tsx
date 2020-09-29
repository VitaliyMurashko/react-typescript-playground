// @ts-nocheck
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { flipInY } from 'react-animations';


const flipInYAnimation = keyframes`${flipInY}`;

const StyledTile = styled.div`
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
        if(clickCounter >= 2){
            setTimeout(() => {
            setclickCounter(0);
            setisClicked(false);   
            }, 2000);     
        }
    },[clickCounter]);
    const ClickHandler = () => {
        if(clickCounter >= 2){
            setisClicked(false)    
        }
            setisClicked(!isClicked)
            setclickCounter(clickCounter + 1)   
    }; 
    
    return (
        isClicked ? 
        <StyledTile bgrColor={'gray'}>{value}</StyledTile> :
        <StyledTile onClick={ ClickHandler } bgrColor={'#c5f3eb'}/>
    )
}
