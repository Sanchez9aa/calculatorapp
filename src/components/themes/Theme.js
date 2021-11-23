import React from 'react'
import { useState } from 'react'
import { StyledThemeLetter, StyledButton, StyledBg, StyledRigthNumbers, StyledRigthNumber } from '../../style/theme.style'

const Theme = () => {

  const [theme, setTheme] = useState(1)
  
  const handleChange = () => {
    if (theme === 1) {
      setTheme(2)
    }else if (theme === 2){
      setTheme(3)
    }else{
      setTheme(1)
    }
  }
  
  console.log(theme)

  return (
    <>
    <div>
    <StyledThemeLetter>Theme</StyledThemeLetter>
    </div>
    <StyledRigthNumbers>
      <StyledRigthNumber>1</StyledRigthNumber>
      <StyledRigthNumber>2</StyledRigthNumber>
      <StyledRigthNumber>3</StyledRigthNumber>
    </StyledRigthNumbers>
    <StyledBg>
      <StyledButton theme={theme} onClick={() => handleChange()}/>
    </StyledBg>
    </>
  )
}

export default Theme
