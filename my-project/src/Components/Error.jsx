import React from "react";
import styled from 'styled-components'

const SpanElem = styled.span`
   font-size: .8rem;
    color: red;
`

const Error = ({title})=> {
    return(
        <SpanElem> {title } وارد شده معتبر نمی باشد </SpanElem>
    )
}
export default Error