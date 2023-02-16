import React from "react";
import styled from 'styled-components'

const SpanElem = styled.span`
color: #616060;
font-family: sans-serif;
font-size: 1.1rem;
`

const Lable = ({title})=> {
    return(
        <SpanElem>{title} *</SpanElem>       
    )
}
export default Lable