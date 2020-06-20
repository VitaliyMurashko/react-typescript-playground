import React from 'react';
import Container from '../Container/Container';
import KeyboardBase from './KeyboardBase';
import TextField from './TextField'


const Keyboard  = () => {

    return (
    <Container BgColor="honeydew">
        <TextField text={'434'}></TextField>
        <KeyboardBase></KeyboardBase>
    </Container>
    )
}

export default Keyboard