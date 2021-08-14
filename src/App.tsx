import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { VFC } from 'react';

import theme from './theme/theme';
import { Router } from './router/Router';

const App: VFC = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
