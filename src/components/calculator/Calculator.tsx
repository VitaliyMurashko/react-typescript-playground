import React, {useState} from 'react';
import './calculator.scss';
import './CalcButton/Button';
import CalcButton from './CalcButton/Button';
import {buttonType} from './CalculatorTypes';
import {buttonsJson} from './lib/buttonsJSON';

const Calculator = () => {
const [eq, setEq] = useState('');
const [display, setDisplay] = useState('');
const [background, setBackground] = useState(['12+4=16', '5/1=5', '11-1=10'])

const buttons:Array<buttonType> = buttonsJson;

    return (
        <div className="container">
            {background.map((item) =><p className='background' style={{
                top:`${Math.random()*60}vh`, 
                left:`${Math.random()*60}vw`, 
                transform:`rotate(${Math.random()*360}deg)`,
                fontSize:`${Math.random()*10}em` 
                }}>{item}</p> )}
            
            <div className="calculator">
                <div className="calculator__display">
                    <span className="calculator__eq"> 
                    {eq} 
                    </span>
                    <span className="calculator__dis">
                    {display} 
                    </span>
                </div>
                {buttons.map(button => <CalcButton 
                key={button.id} id={button.id} value={button.value}
                display={button.display} type={button.type} order={button.order}
                setEq={setEq} setDisplay={setDisplay} eq = {eq} dis ={display}
                background={background} setBackground={setBackground}     
                />)}
            </div>
        </div>
    )
}

export default Calculator

