// @ts-nocheck
import React, {useContext} from 'react';
import { GameContext } from '../MemoryGameReducer';



export const StepCounter:React.FC  = () => {
  const { state } = useContext( GameContext )
    return (
    <div><b>Step Count:</b> { Math.floor( state.steps / 2 ) }</div> 
    )
}
