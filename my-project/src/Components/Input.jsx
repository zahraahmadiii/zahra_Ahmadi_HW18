import React from "react";
import styled from 'styled-components'

const InputElem = styled.input`
padding: .5rem; 
border: none;
outline: none;
border-radius: 3px;
direction: ltr;
`
const Input = ({type , color , changeVal , value})=> {

    const ChangeHandler = (event) => {
        changeVal(event)
    }

    return(
        <InputElem 
        type={type} 
        style={{backgroundColor:color}}
        onChange={ChangeHandler}
        value={value}
        required
        />
    )
}
export default Input