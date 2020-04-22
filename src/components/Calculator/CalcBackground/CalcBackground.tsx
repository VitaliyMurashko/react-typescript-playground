import React, { useState } from 'react';
import './calcBackground.scss';
import Container from '../../Container/Container';
import Calculator from '../Calculator';


const CalcBackground = () => {
    
const [background, setBackground] = useState<string[]>(['12+4=16', '5/1=5', '11-1=10']);
    
return (
        <Container BgColor="aliceblue">
            <>
                {background.map((item, i) => <p key={i} className='background' style={{
                    top: `${Math.random() * 60}vh`,
                    left: `${Math.random() * 60}vw`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    fontSize: `${Math.random() * 10}em`
                }}>{item}</p>)}
                <Calculator background={background} setBackground={setBackground} />
            </>
        </Container>
    )
}

export default CalcBackground;