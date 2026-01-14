import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import theme from "./theme";

const system = createSystem(defaultConfig, theme);

function App() {
  return (
    <ChakraProvider value={system}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
