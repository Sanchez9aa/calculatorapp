import styled from "styled-components";

export const StyledBg = styled.div`
  width: 75px;
  height: 15px;
  border-radius: 20px;
  border: 1px solid hsl(222, 26%, 31%);
  background-color: hsl(223, 31%, 20%);
  z-index: 2;
  position: fixed;
  right: 10%;
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
  top: 15px;
  right: 10%;
`

export const StyledRigthNumber = styled.span`
  color: #fff;
`

export const StyledThemeLetter = styled.span`
  align-items: flex-end;
  display: flex;
  margin-right: 15px;
  color: #fff
`