import React from 'react'
import { useState } from 'react'
import { StyledTheme, StyledThemeLetter, StyledButton, StyledBg, StyledRigthNumbers, StyledRigthNumber } from '../../style/theme.style'
import { useContext } from 'react'
import { ThemeContext } from '../../contexApi'

const Theme = () => {

  const theme = useContext(ThemeContext)

  const [themes, setThemes] = useState(1)
  
  const handleChange = () => {
    if (themes === 1) {
      setThemes(2)
    }else if (themes === 2){
      setThemes(3)
    }else{
      setThemes(1)
    }
    theme.dispatch({type:"TOGGLE"})
  }
  
  return (
    <StyledTheme>
      <StyledThemeLetter>THEME</StyledThemeLetter>
      <StyledRigthNumbers>
        <StyledRigthNumber>1</StyledRigthNumber>
        <StyledRigthNumber>2</StyledRigthNumber>
        <StyledRigthNumber>3</StyledRigthNumber>
      </StyledRigthNumbers>
      <StyledBg>
        <StyledButton theme={theme} onClick={() => handleChange()}/>
      </StyledBg>
    </StyledTheme>
  )
}

export default Theme
