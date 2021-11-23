import React from 'react'
import Header from '../header/Header'
import Buttons from '../buttons/Buttons'
import { StyledCalculator } from '../../style/calculator.style'
import {useContext} from 'react'
import { ThemeContext } from '../../contexApi'

const Calculator = () => {

  const theme = useContext(ThemeContext)

  console.log(theme)
  
  return (
    <StyledCalculator>
      <Header />
      <Buttons />
    </StyledCalculator>
  )
}

export default Calculator
