import { ChakraProvider, Button } from '@chakra-ui/react';
import { VFC } from 'react';
import theme from './theme/theme';

const App: VFC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
    </ChakraProvider>
  );
};

export default App;
