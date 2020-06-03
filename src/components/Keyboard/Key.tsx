import React from 'react';
import styled from 'styled-components';

type Custom = {
    size?: any
  }

const KeyInput = styled.div<Custom>`
grid-column: span ${props => props.size};
font-size:1.5vw;
align-self: auto;
text-align:center;
background-color: floralwhite;
border-radius:3px;
box-shadow: 2px 2px 1px #bababa, -2px -2px 1px #ffffff;
`

type buttonType = {
    value:string,
    size:any
}

const Key:React.SFC<buttonType> = (props) => {
    return (
    <KeyInput size={props.size}>{props.value}</KeyInput>
    )
}

export default Key