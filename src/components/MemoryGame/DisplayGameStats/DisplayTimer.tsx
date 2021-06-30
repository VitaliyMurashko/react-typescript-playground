// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../MemoryGameReducer'



export const DisplayTimer: React.FC = () => {
    const { state, dispatch} = useContext(GameContext);
    const [timer, settimer] = useState(state.timer);
    console.log('DisplayTimer render')
    useEffect(() => {
        if(timer === 0 && !state.gameEndStatus){
            dispatch({type:"isGameEnd", payload:"you lose..."})
        }
        let Timer = timer > 0 && setTimeout(() => settimer(timer - 1), 1000);
        
       return () => clearTimeout(Timer) 
    }, [timer])
    return (
        <>
        {state.gameEndStatus ?  <div><b>Timer: 0</b></div>  : <div><b>Timer: {timer}</b></div>}
        </>
    )
}
