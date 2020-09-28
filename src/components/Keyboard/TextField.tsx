
import React from 'react';
import styled from 'styled-components';
import {useText} from '../../context/KeyboardContext' 




const Wrapper = styled.div`
    margin:5vh 0;
    min-height: 30vh;
    min-width:80%;
    text-align: center;
`
const TextArea = styled.textarea`
    min-height:100%;
    min-width:90%;
    box-shadow:inset 5px 5px 3px #bababa, inset -5px -5px 3px #ffffff;
    background: #e9e9e9;
    border:0;
    border-radius:5px;
    padding:20px;
    font-size:1.4em;
    letter-spacing:.08em;
    color:#606563;
`

const TextField:React.FC = () => {
    const {text} = useText()!;
    return (
        <Wrapper>
            <TextArea value={text} readOnly/>
        </Wrapper>
    )
}

export default TextField 