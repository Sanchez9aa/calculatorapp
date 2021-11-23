import styled from 'styled-components'

export const StyledButtonsWrapper = styled.div`
  padding: 40px;
  background-color: hsl(223, 31%, 20%);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  grid-auto-rows: minmax(100px, auto);
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
`

export const StyledButton = styled.span`
  padding: 25px;
  color: hsl(223, 31%, 20%);
  background-color: ${props => props.color === "orange" ? "hsl(6, 63%, 50%)" : "hsl(30, 25%, 89%)"};
  box-shadow: ${props => props.color === "orange" ? "1px 5px 5px -1px hsl(6, 70%, 34%)" : "1px 5px 5px -1px hsl(28, 16%, 65%)"};
  cursor: pointer;
  border-radius: 5px;
  font-size: 40px;
  text-align: center;
  &:nth-last-child(1){
    grid-column: -1 / 3;
  }
`
export const StyledButtonDark = styled.span`
  padding: 25px;
  color: hsl(223, 31%, 20%);
  background-color: hsl(225, 21%, 49%);
  box-shadow: 1px 5px 5px -1px hsl(224, 28%, 35%);
  cursor: pointer;
  border-radius: 5px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  &:nth-last-child(2){
    grid-column: 1 / 3;
  }
`
