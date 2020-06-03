import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type Custom = {
    size?: number,
    IsPressed?: boolean
}

const KeyInput = styled.div<Custom>`
grid-column: span ${props => props.size};
font-size:1.5vw;
align-self: auto;
text-align:center;
background-color: floralwhite;
border-radius:3px;
box-shadow: ${props => props.IsPressed ? `inset 2px 2px 1px #bababa, inset -2px -2px 1px #ffffff;` : `2px 2px 1px #bababa, -2px -2px 1px #ffffff;`}
&:active {
    box-shadow: inset 2px 2px 1px #bababa,
        inset -2px -2px 1px #ffffff;
}
`

type buttonType = {
    value: string,
    size: any,
    pressedKey: string,
    setkey: (payload:any) => void
}

const Key: React.SFC<buttonType> = (props) => {
    const [IsPressed, setIsPressed] = useState(false)

    useEffect(() => {
        props.pressedKey === props.value && setIsPressed(true)
        setTimeout(() => {
            setIsPressed(false)
        }, 100)
    }, [props.pressedKey, props.value])

    return (
        <KeyInput size={props.size} IsPressed={IsPressed}>{props.value}</KeyInput>
    )
}

export default Key