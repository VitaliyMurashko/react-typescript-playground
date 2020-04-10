import React, {SyntheticEvent} from 'react';
import './button.scss';
import {buttonType} from '../CalculatorTypes';

type DisplayType = {
    setEq :  (payload:any) => void
    setDisplay :  (payload:any) => void
    eq:any
    dis:any
}

type BackgroundType = {
    background:Array<string>,
    setBackground:(payload:Array<string>) => void
}

const CalcButton: React.SFC<DisplayType & buttonType & BackgroundType> = ({id, value, display, type, order,setEq, setDisplay, dis, background, setBackground}) => {

    const clickEvent = (e:SyntheticEvent):void => {
        const target = e.target as HTMLButtonElement
    
        switch(target.dataset.type){
            case 'NUMBER':
                    setDisplay(dis + target.value);
                break;
            case 'OPERATION':
                dis.substr(-1).match(/[+\-*/]/) ?
                setDisplay(dis) :
                setDisplay(dis + target.value)
                break;
            case 'CLEAR':
                setDisplay('');
                setEq('');
                setBackground([]);
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
                if(dis.substr(-1).match(/[+\-*/.]/)){
                    setDisplay(dis)
                } else {
                setEq(dis + target.value)
                setDisplay(`${eval(dis)}`);
                setBackground([...background, `${dis + target.value}${eval(dis)}`])
                }
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