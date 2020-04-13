import React, {FunctionComponent} from 'react';
import {namesJson} from './names';
import Container from '../Container/Container'

const NameSearch :FunctionComponent = () => {
    return(
    <Container BgColor="honeydew">
        <input type="text"></input>
    </Container>
    )
}

export default NameSearch