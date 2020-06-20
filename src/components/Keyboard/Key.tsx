import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type Custom = {
    size?: number,
    IsPressed?: boolean
}

const KeyInput = styled.div<Custom>`
grid-column: span ${props => props.size};
font-size:2vw;
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

const Key: React.SFC<buttonType> = ({value, size, pressedKey, setkey}) => {
    const [IsPressed, setIsPressed] = useState(false)

    useEffect(() => {
        pressedKey === value && setIsPressed(true)
        setTimeout(() => {
            setIsPressed(false)
            setkey('');
        }, 100)
    }, [pressedKey, value])

    return (
        <KeyInput size={size} IsPressed={IsPressed}>{value}</KeyInput>
    )
}

export default Key