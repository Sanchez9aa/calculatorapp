import React from 'react'
import { StyledResult, StyledScreen } from '../../style/screen.style'

const Screen = ({value}) => {
  console.log(value)
  return (
    <StyledScreen>
      <StyledResult>
        {!value ? 0 : value}
      </StyledResult>
    </StyledScreen>
  )
}

export default Screen
