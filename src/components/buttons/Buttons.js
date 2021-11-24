import React, {useState} from 'react'
import {StyledButtonsWrapper, StyledButton, StyledButtonDark, StyledEqualButton} from '../../style/buttons.style'
import Screen from '../screen/Screen'

const Buttons = ({theme}) => {  
  const [value, setValue] = useState({
    sign: "",
    num: 0,
    res: 0
  })

  const numClickHandler = (e) => {
    const val = e.target.innerHTML
    if(value.num.length < 16 || value.num.length === undefined){
      setValue({
        ...value,
        num: 
          value.num === 0 && val === 0
          ? 0
          : value.num % 1 === 0
          ? Number(value.num + val)
          : value.num + val,
        res: !value.sign ? 0 : value.res
      })
    }
  }

  const decimalClickHandler = (e) => {
    const val = e.target.innerHTML
    setValue({
      ...value,
      num: !value.num.toString().includes(".") ? value.num + val : value.num 
    })
  }
  
  const resetClickHandler = () => {
    setValue({
      sign: "",
      num: 0,
      res: 0
    })
  }

  const signClickHandler = (e) => {
    const val = e.target.innerHTML
    setValue({
      ...value, 
      sign: val,
      res: !value.res && value.num ? value.num : value.res,
      num: 0

    })
  } 

  const equalClickHandler = () => {
    if (value.sign && value.num){
      const operations = (a,b, sign) => {
        switch(sign){
          case "+":
            return a+b;
          case "-":
            return a-b;
          case "/":
            return a/b;
          case "*":
            return a*b
          default:
            return 0
        }
      }

      setValue({
        ...value,
        res:
          value.num === "0" && value.sign === "/"
          ? "Can not divide with 0"
          : operations(Number(value.res), Number(value.num), value.sign),
        sign: "",
        num: 0
        })

    }
  }

  const deleteClickHandler = () => {
    if( !value.num )
    {
      setValue({
        ...value,
        res: Number(value.res.toString().slice(0, -1))
      })
    }else{
      setValue({
        ...value,
        num: Number(value.num.toString().slice(0, -1))
      })
    }
  }


  return (
    <>
      <Screen value={value.num ? value.num : value.res} theme={theme}/>
      <StyledButtonsWrapper theme={theme}>
          <StyledButton theme={theme} onClick={(e) => numClickHandler(e)}>7</StyledButton> 
          <StyledButton theme={theme} onClick={(e) => numClickHandler(e)}>8</StyledButton> 
          <StyledButton theme={theme} onClick={(e) => numClickHandler(e)}>9</StyledButton> 
          <StyledButtonDark theme={theme} onClick={() => deleteClickHandler()}>DEL</StyledButtonDark> 
          <StyledButton theme={theme} onClick={(e) => numClickHandler(e)}>4</StyledButton> 
          <StyledButton theme={theme} onClick={(e) => numClickHandler(e)}>5</StyledButton> 
          <StyledButton theme={theme} onClick={(e) => numClickHandler(e)}>6</StyledButton> 
          <StyledButton theme={theme} onClick={(e) => signClickHandler(e)}>+</StyledButton>
          <StyledButton theme={theme} onClick={(e) => numClickHandler(e)}>1</StyledButton> 
          <StyledButton theme={theme} onClick={(e) => numClickHandler(e)}>2</StyledButton> 
          <StyledButton theme={theme} onClick={(e) => numClickHandler(e)}>3</StyledButton> 
          <StyledButton theme={theme} onClick={(e) => signClickHandler(e)}>-</StyledButton>
          <StyledButton theme={theme} onClick={(e) => decimalClickHandler(e)}>.</StyledButton> 
          <StyledButton theme={theme} onClick={(e) => numClickHandler(e)}>0</StyledButton> 
          <StyledButton theme={theme} onClick={(e) => signClickHandler(e)}>/</StyledButton> 
          <StyledButton theme={theme} onClick={(e) => signClickHandler(e)}>*</StyledButton>
          <StyledButtonDark theme={theme} onClick={() => resetClickHandler()}>RESET</StyledButtonDark>
          <StyledEqualButton theme={theme} onClick={() => equalClickHandler()}>=</StyledEqualButton>
      </StyledButtonsWrapper>
    </>
  )
}

export default Buttons
