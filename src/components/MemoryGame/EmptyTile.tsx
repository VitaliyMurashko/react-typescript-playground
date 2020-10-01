// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

const StyledEmptyTile = styled.div`
    background-color: #c5f3eb; 
    border: 1px solid #d8cece;
`

export const EmptyTile = ({ClickHandler}) => {
    return (
        <StyledEmptyTile onClick={()=> ClickHandler()}/>
    )

}
