import React, {useState} from 'react';
import './calculator.scss';
import './CalcButton/Button';
import CalcButton from './CalcButton/Button';
import {buttonType} from './CalculatorTypes';
import {buttonsJson} from './lib/buttonsJSON';

const Calculator = () => {
const [eq, setEq] = useState('');
const [display, setDisplay] = useState('');

const buttons:Array<buttonType> = buttonsJson;

    return (
        <div className="container">
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

                />)}
            </div>
        </div>
    )
}

export default Calculator

