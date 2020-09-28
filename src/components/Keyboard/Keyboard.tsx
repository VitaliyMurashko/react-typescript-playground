
import React from 'react';
import Container from '../Container/Container';
import KeyboardBase from './KeyboardBase';
import TextField from './TextField';
import TextProvider from '../../context/KeyboardContext';


const Keyboard  = () => {
    
    return (
        <Container BgColor="honeydew">
            <TextProvider>
            <TextField />
            <KeyboardBase />
            </TextProvider>
        </Container>
    )
}

export default Keyboard