import React from 'react'
import Header from '../header/Header'
import Main from '../main/Main'
import { StyledCalculator } from '../../style/calculator.style'
import {useContext} from 'react'
import { ThemeContext } from '../../contexApi'

const Calculator = () => {

  const theme = useContext(ThemeContext)
  const themes = theme.state.theme

  return (
    <StyledCalculator theme={themes}>
      <Header theme={themes}/>
      <Main theme={themes}/>
    </StyledCalculator>
  )
}

export default Calculator
