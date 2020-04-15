import React, { SyntheticEvent } from 'react';
import './button.scss';
import { buttonType } from '../CalculatorTypes';
import {checkBalanceStr} from '../lib/checkBalanceStr'

type DisplayType = {
    setEq: (payload: any) => void
    setDisplay: (payload: any) => void
    eq: any
    dis: any
}

type BackgroundType = {
    background: Array<string>,
    setBackground: (payload: Array<string>) => void
}

const CalcButton: React.SFC<DisplayType & buttonType & BackgroundType> = ({ id, value, display, type, order, setEq, setDisplay, dis, background, setBackground }) => {

    const clickEvent = (e: SyntheticEvent): void => {
        const target = e.target as HTMLButtonElement

        switch (target.dataset.type) {
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
                dis.substr(-1).match(/\./) ?
                setDisplay(dis) :
                setDisplay(dis + target.value);
                break;
            case 'DELETE':
                setDisplay(dis.slice(0, (dis.length - 1)));
                break;
            case 'EQUAL':
                if (dis.substr(-1).match(/[+\-*/]/)) {
                    setDisplay(dis)
                } else {
                    if(checkBalanceStr(dis) && dis.match(/[0-9]/)){
                    setEq(dis + target.value)
                    setDisplay(`${eval(dis)}`);
                    setBackground([...background, `${dis + target.value}${eval(dis)}`])
                    }else {
                        setDisplay('')
                    }  
                }
                break;
            default:
                setDisplay('ERROR')
        }

    }

    return (
        <button type="button" id={id} value={value} className="calcButton" style={{ order: order }} data-type={type} onClick={clickEvent}>{display}</button>
    )
}

export default CalcButton;