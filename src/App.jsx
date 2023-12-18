import { ChakraProvider } from "@chakra-ui/react";
import FormComponent from "./components/Form";

function App() {
  return (
    <ChakraProvider>
      <FormComponent />
    </ChakraProvider>
  );
}

export default App;
