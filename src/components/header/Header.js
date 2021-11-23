import React from 'react'
import Theme from '../themes/Theme'
import { StyledHeader, StyledLetter } from '../../style/header.style'

const Header = () => {
  return (
    <StyledHeader>
      <StyledLetter>Calc</StyledLetter>
      <Theme/>
    </StyledHeader>
  )
}

export default Header
