// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import { MatchCouter } from './DisplayGameStats/MatchCounter';
import { StepCounter } from './DisplayGameStats/StepCounter';
import { DisplayTimer} from './DisplayGameStats/DisplayTimer';

const DisplayGameWrapper = styled.div`
    display: flex;
    width: 100%;
    background-color: #e9e9e9;
    border-radius: 5px 5px 0 0;
`
const DisplayGameEmpty = styled.div`
    width: 50%;
    border-radius: 5px 0 20px 0;
    background-color: rgb(186, 224, 221);
`
const DisplayGameStats = styled.div`
    width: 50%;
    border-radius: 5px 20px 0 0;
    background-color: #e9e9e9;
    padding-left: 20px;
    color: #757171;
`

export const DisplayGame = () => {
    return (
        <DisplayGameWrapper>
            <DisplayGameEmpty/>
            <DisplayGameStats>
                <DisplayTimer/>
                <MatchCouter/>
                <StepCounter/>
            </DisplayGameStats>    
        </DisplayGameWrapper>
    )

}
