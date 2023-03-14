import { ChakraProvider } from "@chakra-ui/react";
import Main from "./pages/Main";
import theme from "./style/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Main/>
      </div>
    </ChakraProvider>
  );
}

export default App;
