// @ts-nocheck
import React, { useContext } from 'react';
import { GameContext } from '../MemoryGameReducer'



export const MatchCouter:React.FC  = () => {
  const { state } = useContext(GameContext);
    return (
      <div><b>Match:</b> {state.match} from {state.width * state.height / 2} </div> 
    )
}
