// @ts-nocheck
import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../MemoryGameReducer'



export const DisplayTimer: React.FC = () => {
    const { state } = useContext(GameContext);
    const [timer, settimer] = useState(state.timer);
    useEffect(() => {
        let Timer = setTimeout(() => settimer(timer - 1), 1000);
       return () => clearTimeout(Timer) 
    }, [timer])
    return (
    <div><b>Timer: {timer}</b></div>
    )
}
