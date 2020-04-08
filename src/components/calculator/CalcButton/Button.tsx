import React from 'react';
import './button.scss';
import {buttonType} from '../CalculatorTypes'

const CalcButton: React.SFC<buttonType> = ({id, value, display, order}) => {
    return (
    <button type="button" id={id} value={value} className="calcButton" style={{order:order}} >{display}</button>
    )
}

export default CalcButton;