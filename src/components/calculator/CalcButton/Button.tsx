import React, {SyntheticEvent} from 'react';
import './button.scss';
import {buttonType} from '../CalculatorTypes';

type DisplayType = {
    setEq :  (payload:any) => void
    setDisplay :  (payload:any) => void
    eq:any
    dis:any
}

const CalcButton: React.SFC<DisplayType & buttonType> = ({id, value, display, type, order,setEq,setDisplay,eq,dis}) => {

    const clickEvent = (e:SyntheticEvent):void => {
        const target = e.target as HTMLButtonElement
    
        switch(target.dataset.type){
            case 'NUMBER':
                    setDisplay(dis + target.value);
                break;
            case 'OPERATION':
                setDisplay(dis + target.value);
                break;
            case 'CLEAR':
                setDisplay('');
                setEq('')
                break;
            case 'BRACKET':
                setDisplay(dis + target.value);
                break;
            case 'DECIMAL':
                setDisplay(dis + target.value);
                break;
            case 'PERCENT':
                setDisplay(target.value);
                break;
            case 'EQUAL':
                setEq(dis + target.value)
                setDisplay(eval(dis));
                break;        
            default:
                setDisplay('ERROR')                    
        }

    }

    return (
        <button type="button" id={id} value={value} className="calcButton" style={{order:order}} data-type={type} onClick={clickEvent}>{display}</button>
    )
}

export default CalcButton;