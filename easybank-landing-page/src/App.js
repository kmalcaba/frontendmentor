import GlobalStyles from "./components/styles/Global";
import { FlexContainer } from "./components/styles/FlexContainer.styled";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <FlexContainer direction='column'>
        <Header />
        <Main />
        <Footer />
      </FlexContainer>
    </>
  );
}

export default App;
