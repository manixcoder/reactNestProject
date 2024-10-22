import React, { useState } from 'react'
import styled from 'styled-components';

const RoleDice = ({
    currentDice,
    roleDice
}) => {


    

    return (
        <DiceContainer>
            <div className='dice' onClick={() => roleDice()}>
                <img src={`/images/dice/dice_${currentDice}.png`} />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RoleDice;

const DiceContainer = styled.div`
    display: flex;
    margin-top: 48px;
    flex-direction: column;
    align-items: center;
    p{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;
    }
`;
