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
  border: 1px solid hsl(222, 26%, 31%);
  background-color: hsl(223, 31%, 20%);
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
  left: ${props => props.theme === 1 ? "0" : ( props.theme === 2 ? "32px" : "64px")};
`

export const StyledRigthNumbers = styled.div`
  width: 75px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 25px;
`

export const StyledRigthNumber = styled.span`
  color: #fff;
`

export const StyledThemeLetter = styled.span`
  font-size: 18px;
  margin-right: 85px;
  color: #fff
`