import styled from "styled-components";

export const StyledTheme = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const StyledBg = styled.div`
  width: 75px;
  height: 15px;
  border-radius: 20px;
  background: ${props => props.theme === 1 ? "hsl(223, 31%, 20%)" : props.theme === 2 ? "hsl(0, 5%, 81%)" : "hsl(268, 71%, 12%)"};
  z-index: 2;
  position: fixed;
`
export const StyledButton = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  cursor: pointer;
  left: ${props => props.theme === 1 ? "0" : props.theme === 2 ? "32px" : "64px"};
`

export const StyledRigthNumbers = styled.div`
  width: 75px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 25px;
`

export const StyledRigthNumber = styled.span`
  color: ${props => props.theme === 1 ? "hsl(0, 0%, 100%)" : props.theme === 2 ? "hsl(60, 10%, 19%)" : "hsl(52, 100%, 62%)"};
  font-weight: 700;
  `

export const StyledThemeLetter = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-right: 95px;
  color: ${props => props.theme === 1 ? "hsl(0, 0%, 100%)" : props.theme === 2 ? "hsl(60, 10%, 19%)" : "hsl(52, 100%, 62%)"}
`