// @ts-check
import React from 'react';
import { StepCounter } from './StepCounter';
import { MatchCouter } from './MatchCounter';



export const GameSettings:React.FC  = () => {
    return (
      <div>
        <StepCounter></StepCounter>
        <MatchCouter></MatchCouter>
      </div> 
    )
}
