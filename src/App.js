import Calculator from "./components/calculator/Calculator";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');
  body {
    font-family: Spartan, sans-serif;
  }
`



const App = () => {
  return (
    <>
      <GlobalStyles />
      <Calculator />
    </>
  );
}

export default App;
