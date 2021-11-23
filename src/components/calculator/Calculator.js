import React from 'react'
import Header from '../header/Header'
import Buttons from '../buttons/Buttons'
import { StyledCalculator } from '../../style/calculator.style'

const Calculator = () => {

  const calculator = {
    sum: (a,b) => a+b,
    diff: (a,b) => a-b,
    div: (a,b) => a/b,
    mult: (a,b) => a*b
  }

  return (
    <StyledCalculator>
      <Header />
      <Buttons />
    </StyledCalculator>
  )
}

export default Calculator
