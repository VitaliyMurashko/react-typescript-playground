import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Key from './Key';
import { Buttons } from './Buttons';

const Container = styled.div`
display: grid;
grid-template-columns: repeat(30, 2vw);
grid-template-rows: repeat(5, 4vw);
grid-gap: 0.4vw;
background: #e9e9e9;
color: rgba(33, 36, 29, 0.568);
box-shadow: 7px 7px 5px #bababa, -7px -7px 5px #fff;
border-radius: 5px;
padding:1vw;
`



const KeyboardBase = () => {

    const [key, setkey] = useState('')

    console.log(key);
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            setkey(e.key)
        })
        return () => {
            document.removeEventListener('keydown', (e) => {
                setkey(e.key) 
            })
        };
    }, [])

    return (
        <Container>
            {Buttons.map(button => <Key key={Math.random() * 100} value={button.value} size={button.size} pressedKey={key} setkey={setkey} />)}
        </Container>
    )
}

export default KeyboardBase