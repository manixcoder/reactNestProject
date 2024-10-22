import React, { useState } from 'react'
import styles, { styled } from 'styled-components'

const NumberSelecter = ({ error, setError, selectedNumber, setSelectedNumber }) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value)
        setError("")
    }

    console.log(selectedNumber)
    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
                {
                    arrNumber.map((value, i) => (
                        <Box
                            isSelected={value === selectedNumber}
                            key={i}
                            onClick={()=>numberSelectorHandler(value) }>
                            {value}
                        </Box>
                    ))
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>

    )
}

export default NumberSelecter;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;

    }
    .error{
        color: red;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    place-items:center;
    display: grid;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
