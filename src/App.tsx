import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./styles/theme";
import About from './pages/about';
import Home from './pages/home';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
