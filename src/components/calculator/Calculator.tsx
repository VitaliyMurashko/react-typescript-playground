import React, {useState,FunctionComponent} from 'react';
import './calculator.scss';
import './CalcButton/Button';
import CalcButton from './CalcButton/Button';
import {buttonType} from './CalculatorTypes';
import {buttonsJson} from './lib/buttonsJSON';


const Calculator:FunctionComponent<any> = ({background, setBackground}) => {
    
const [eq, setEq] = useState('');
const [display, setDisplay] = useState('');

const buttons:Array<buttonType> = buttonsJson;

    return (
        <>  
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
        </>
    )
}

export default Calculator

