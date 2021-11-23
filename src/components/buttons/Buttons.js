import React from 'react'
import {StyledButtonsWrapper, StyledButton, StyledButtonDark} from '../../style/buttons.style'

const Buttons = () => {  
  return (
    <StyledButtonsWrapper>
        <StyledButton>7</StyledButton> 
        <StyledButton>8</StyledButton> 
        <StyledButton>9</StyledButton> 
        <StyledButtonDark>DEL</StyledButtonDark> 
        <StyledButton>4</StyledButton> 
        <StyledButton>5</StyledButton> 
        <StyledButton>6</StyledButton> 
        <StyledButton>+</StyledButton>
        <StyledButton>1</StyledButton> 
        <StyledButton>2</StyledButton> 
        <StyledButton>3</StyledButton> 
        <StyledButton>-</StyledButton>
        <StyledButton>.</StyledButton> 
        <StyledButton>0</StyledButton> 
        <StyledButton>/</StyledButton> 
        <StyledButton>*</StyledButton>
        <StyledButtonDark>RESET</StyledButtonDark>
        <StyledButton color={"orange"}>=</StyledButton>
    </StyledButtonsWrapper>
  )
}

export default Buttons
