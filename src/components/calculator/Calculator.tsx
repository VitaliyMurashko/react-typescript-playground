import React from 'react';
import './calculator.scss';
import './CalcButton/Button';
import CalcButton from './CalcButton/Button';
import {buttonType} from './CalculatorTypes'

const Calculator = () => {

    const buttons:Array<buttonType> = [
        {
            id:'clear',
            value:'clear',
            display:'C',
            type: 'CLEAR',
            order: 1
        
        },
        {
            id:'devide',
            value:'/',
            display:'÷',
            type: 'OPERATION',
            order: 8  
        },
        {
            id:'multiply',
            value:'*',
            display:'x',
            type: 'OPERATION',
            order: 12
        },
        {
            id:'add',
            value:'+',
            display:'+',
            type: 'OPERATION',
            order: 16
        },
        {
            id:'subtract',
            value:'-',
            display:'-',
            type: 'OPERATION',
            order: 20
        },
        {
            id:'decimal',
            value:'.',
            display:'.',
            type: 'DECIMAL',
            order: 18
        },
        {
            id:'equal',
            value:'=',
            display:'=',
            type: 'EQUAL',
            order: 19
        },
        {
            id:'bracket2',
            value:')',
            display:')',
            type: 'BRACKET',
            order: 3
        },
        {
            id:'percent',
            value:'%',
            display:'%',
            type: 'PERCENT',
            order: 4
        },
        {
            id:'bracket1',
            value:'(',
            display:'(',
            type: 'BRACKET',
            order: 2
        },
        {
            id:'one',
            value: 1,
            display:'1',
            type: 'NUMBER',
            order: 5
        },
        {
            id:'two',
            value: 2,
            display:'2',
            type: 'NUMBER',
            order: 6
        },
        {
            id:'tree',
            value: 3,
            display:'3',
            type: 'NUMBER',
            order: 7
        },
        {
            id:'four',
            value: 4,
            display:'4',
            type: 'NUMBER',
            order: 9
        },
        {
            id:'five',
            value: 5,
            display:'5',
            type: 'NUMBER',
            order: 10
        },
        {
            id:'six',
            value: 6,
            display:'6',
            type: 'NUMBER',
            order: 11
        },
        {
            id:'seven',
            value: 7,
            display:'7',
            type: 'NUMBER',
            order: 13
        },
        {
            id:'eight',
            value: 8,
            display:'8',
            type: 'NUMBER',
            order: 14
        },
        {
            id:'nine',
            value: 9,
            display:'9',
            type: 'NUMBER',
            order: 15
        },
        {
            id:'zero',
            value: 0,
            display:'0',
            type: 'NUMBER',
            order: 17
        },
        
    ]


    return (
        <div className="container">
            <div className="calculator">
                <div className="calculator__display">
                    <span> 
                        15  
                    </span>
                    <span>
                        12+3= 
                    </span>
                </div>
                {buttons.map(button => <CalcButton id={button.id} value={button.value} display={button.display} type={button.type} order={button.order}/>)}
            </div>
        </div>
    )
}

export default Calculator

