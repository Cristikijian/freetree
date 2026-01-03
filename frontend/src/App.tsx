import { Box, ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import theme from './theme';

const system = createSystem(defaultConfig, theme)

function App() {
  return (
    <ChakraProvider value={system}>
      <Box minH="100vh" bg="gray.50">
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
